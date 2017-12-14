import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";
import { Observable } from "rxjs/Observable";
import { productUrl } from '../../constants';
import { AdminCreateProductModel } from "../../models/admin/product/create-product-model";
import { AdminProductTableModel } from "../../models/admin/product/product-table-model";
import { map } from 'rxjs/operators';

@Injectable()
export class AdminProductService {
    constructor(private http: HttpClientService) { }

    createProduct(product: AdminCreateProductModel): Observable<Object> {
        return this.http.post<AdminCreateProductModel>(productUrl, product, 'Kinvey');
    }

    getAllProducts(): Observable<AdminProductTableModel[]> {
        return this.http.get<AdminProductTableModel[]>(productUrl)
            .pipe(
            map(data => {
                let arr: AdminProductTableModel[] = [];
                for (let product of data) {
                    arr.push(new AdminProductTableModel(
                        product._id,
                        product.title,
                        product.price,
                        product.model
                    ));
                }
                return arr;
            }));
    }

    getProductById(id): Observable<AdminCreateProductModel> {
        return this.http.get<AdminCreateProductModel>(productUrl + '/' + id);
    }

    editProduct(product: AdminCreateProductModel, id): Observable<Object> {
        return this.http.put(productUrl + '/' + id, product, 'Kinvey');
    }

    deleteProduct(id: string) {
        console.log(productUrl + '/' + id);
        return this.http.delete(productUrl + '/' + id, 'Kinvey');
    }
}