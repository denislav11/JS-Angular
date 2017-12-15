import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';

import { productUrl } from '../../constants';
import { ProductModel } from "../../models/product/product-model";
import { HotProductModel } from "../../models/product/hot-product-model";

const queryHotProducts = `${productUrl}/?query={}&sort={"_kmd.ect": -1}&limit=10`;

@Injectable()
export class ProductService {
    constructor(private http: HttpClientService) { }

    getAllProducts(): Observable<ProductModel[]> {
        return this.http.get<ProductModel[]>(productUrl)
            .pipe(
            map(data => {
                let arr: ProductModel[] = [];
                for (let product of data) {
                    arr.push(new ProductModel(
                        product._id,
                        product.title,
                        product.price,
                        product.description,
                        product.categoryId,
                        product.model,
                        product.imageUrl
                    ));
                }
                return arr;
            }));
    }

    getProductById(id): Observable<ProductModel> {
        return this.http.get<ProductModel>(productUrl + '/' + id);
    }

    getHotProducts(): Observable<HotProductModel[]> {
        return this.http.get<HotProductModel[]>(queryHotProducts)
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