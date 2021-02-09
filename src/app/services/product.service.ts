import { Injectable } from "@angular/core";
import { Product, productProps } from "./../models/productModel";
import { Mapper } from "./../utils/mapper";
import axios from "axios";
import { environment } from "./../../environments/environment";
import { Subject } from "rxjs";
import { findIndexFromObjectId } from "./../utils/helper";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private state = {
    product: {} as Product,
    products: [] as Array<Product>,
    recommendedProducts: [] as Array<Product>,
    productsChanged: new Subject<Product[]>(),
  };

  createNewProduct(productData: productProps) {
    const newProduct = Product.buildProduct(productData);
    this.state.product = newProduct;
  }

  async saveNewProduct() {
    if (!this.state.product) {
      throw new Error("no new product created");
    }
    const productToPersist = Mapper.toPersist(this.state.product);
    const productResponse = await axios.post(
      environment.productRoutes,
      productToPersist
    );
    if (productResponse.status !== 201) {
      throw new Error("cannot create product please try again");
    }
    const product = Mapper.toProduct(productResponse.data.data.products);
    this.state.products.push(product);
    this.state.productsChanged.next(this.state.products);
  }

  async fetchProducts() {
    const productResponse = await axios.get(environment.productRoutes);
    // console.log("product", productResponse);
    this.state.products = Mapper.toItemList(productResponse.data.data.data);
    this.state.productsChanged.next(this.state.products);
  }

  async deleteProduct(id: String) {
    if (!id) {
      return;
    }
    // await axios.delete(`${environment.databaseUrl}/${id}`);
    const deletedIndex = findIndexFromObjectId(this.state.products, id);
    axios.delete(`${environment.productRoutes}/${id}`).then(() => {
      this.state.products.splice(deletedIndex, 1);
    });
  }

  async markProductAsRecommended(id: String) {
    if (!id) {
      return;
    }
    let product = this.state.products.find((product) => product._id == id);

    product.recommend = !product.recommend;
    const index = findIndexFromObjectId(this.state.products, id);
    this.state.products[index] = product;
    this.state.productsChanged.next(this.state.products);
    await this.updateProduct(id, { recommend: product.recommend });
  }

  getProducts() {
    this.state.productsChanged.next(this.state.products);
  }

  getRecommended() {
    const sortedProduct = this.state.products.filter(
      (product) => product.recommend === true
    );
    this.state.recommendedProducts = sortedProduct;
    this.state.productsChanged.next(sortedProduct);
  }

  async updateProduct(id: String, data: any) {
    console.log("update data", data);
    const updatedProduct = await axios.patch(
      `${environment.productRoutes}/${id}`,
      {
        ...data,
      },
      {
        withCredentials: true,
      }
    );
    // console.log("updatedProduct", updatedProduct);
  }

  getProductsListener() {
    return this.state.productsChanged.asObservable();
  }
}
