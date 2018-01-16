import { Injectable } from "@angular/core";
import { HttpClientService } from "./http-client.service";
import { Observable } from "rxjs/Observable";
import { productUrl } from '../constants';
import { CreateProductModel } from "../models/create-product-model";
import { AdminProductTableModel } from "../models/admin/product/product-table-model";
import { map } from 'rxjs/operators';
import { ProductModel } from "../models/product/product-model";
import { HotProductModel } from "../models/product/hot-product-model";

@Injectable()
export class ProductService {
    constructor(private http: HttpClientService) { }

    createProduct(product: CreateProductModel): Observable<Object> {
        return this.http.post<CreateProductModel>(productUrl, product);
    }

    editProduct(product: ProductModel): Observable<Object> {
        return this.http.put<ProductModel>(productUrl, product);
    }

    deleteProduct(id: string) {
        console.log(productUrl + '/' + id);
        return this.http.delete(productUrl + '/' + id);
    }

    getAllProducts(): Observable<ProductModel[]> {
        return this.http.get<ProductModel[]>(productUrl)
            .pipe(
            map(res => {
                let arr: ProductModel[] = [];
                for (let product of res['data']) {
                    arr.push(new ProductModel(
                        product._id,
                        product.title,
                        product.price,
                        product.description,
                        product.category,
                        product.model,
                        product.image
                    ));
                }
                return arr;
            }));
    }

    getProductById(id): Observable<ProductModel> {
        return this.http.get<ProductModel>(productUrl + '/' + id);
    }

    getHotProducts(): Observable<HotProductModel[]> {
        return this.http.get<HotProductModel[]>(productUrl + '/?page=2')
            .pipe(
            map(data => {
                let arr: HotProductModel[] = [];
                for (let product of data) {
                    arr.push(new HotProductModel(
                        product._id,
                        product.title,
                        product.price,
                        product.imageUrl
                    ))
                }
                return arr;
            }));
    }
}