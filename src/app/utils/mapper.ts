import { Product } from "../models/productModel";
import { googleDriveImage } from "./googleDriveImage";

export interface productDBSchema {
  brand: String;
  type: String;
  category: String;
  size: number[];
  configurations: String[];
  details: String;
  model_no: String;
  image_url: String;
  recommend: Boolean;
}

export class Mapper {
  public static toItemList(products: Array<any>): Product[] {
    return products.map((product) => {
      const productToBuild = Object.assign(product, {
        modelNo: product.model_no,
        imageUrl:
          product.image_url === undefined
            ? ""
            : googleDriveImage.build(product.image_url).toDisplay(),
      });
      return Product.buildProduct(productToBuild);
    });
  }
  public static toPersist(product: Product) {
    const productToPersist: productDBSchema = {
      brand: product.brand,
      type: product.type,
      category: product.category,
      size: product.size,
      configurations: product.configurations,
      details: product.details,
      model_no: product.modelNo,
      image_url: product.imageUrl,
      recommend: product.recommend,
    };
    return productToPersist;
  }

  public static toProduct(productSchema: productDBSchema) {
    const productToModel: Product = {
      brand: productSchema.brand,
      type: productSchema.type,
      category: productSchema.category,
      size: productSchema.size,
      configurations: productSchema.configurations,
      details: productSchema.details,
      modelNo: productSchema.model_no,
      imageUrl: productSchema.image_url,
      recommend: productSchema.recommend,
    };
    return productToModel;
  }
}
