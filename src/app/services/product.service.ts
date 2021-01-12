import { Injectable } from "@angular/core";
import { Product, ProductProps } from "../models/product.model";
import { ProductRepository } from '../repositories/product.repository';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(
        private productRepository: ProductRepository
    ) {
    }
    buildProduct(props: ProductProps): Product {
        if(props === null || props === undefined) {
            throw new Error("product props cannot be null or undefined");
        }

        return new Product(props);
    }

    async save(product: Product) {
        const response = await this.productRepository.save(product);
        console.log(response);
    }

    async loadCollection(): Promise<Product[]> {
         return await this.productRepository.loadCollection();
    }
}