import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs/Observable';
import { productUrl, imageUrl } from '../constants';
import { CreateProductModel } from '../models/product/create-product-model';
import { AdminProductTableModel } from '../models/admin/product/product-table-model';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { ProductModel } from '../models/product/product-model';
import { HotProductModel } from '../models/product/hot-product-model';

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
        return this.http.delete(productUrl + '/' + id);
    }

    getAllProducts(query): Observable<ProductModel[]> {
        return this.http.get<ProductModel[]>(productUrl + query)
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
        return this.http.get<HotProductModel[]>(productUrl + '/?limit=10&sort=-date')
            .pipe(
                map(res => {
                    let arr: HotProductModel[] = [];
                    for (let product of res['data']) {
                        arr.push(new HotProductModel(
                            product._id,
                            product.title,
                            product.price,
                            product.image
                        ))
                    }
                    return arr;
                }));
    }

    uploadImage(files: File[]): Observable<Object> {
        let formData: FormData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i].name);
        }
        return this.http.post(imageUrl, formData);
    }

    debounce(e) {
        return e.debounceTime(1000)
            .distinctUntilChanged()
            .switchMap(x => this.getAllProducts('?title=' + x));
    }
}