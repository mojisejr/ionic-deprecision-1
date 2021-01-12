import { Product } from '../models/product.model';
import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { Repository } from './repository.abstract';
const rootUrl = "http://localhost:3000"

@Injectable({
    providedIn: "root",
})
export class ProductRepository extends Repository<Product> {
    async save(product: Product): Promise<AxiosResponse> {
        if(product === null || product === undefined) {
            throw new Error("cannot save null value");
        }
        console.log(product);
        return await axios.post(`${rootUrl}/products`, product);
    }

    async loadCollection(): Promise<Product[]> {
        let products: Product[] = [];
        const response = await axios.get(`${rootUrl}/products`);
        console.log(response.data);
        products = [...response.data];
        return products;
    }
}