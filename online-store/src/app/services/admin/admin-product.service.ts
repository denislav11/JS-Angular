import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";
import { Observable } from "rxjs/Observable";
import { productUrl } from '../../constants';
import { AdminCreateProductModel } from "../../models/admin/product/create-product-model";
import { AdminProductTableModel } from "../../models/admin/product/product-table-model";
import { map } from 'rxjs/operators';
import { ProductModel } from "../../models/product/product-model";

@Injectable()
export class AdminProductService {
    constructor(private http: HttpClientService) { }

    createProduct(product: AdminCreateProductModel): Observable<Object> {
        return this.http.post<AdminCreateProductModel>(productUrl, product);
    }

    editProduct(product: ProductModel): Observable<Object> {
        return this.http.put<ProductModel>(productUrl + '/' + product._id, product);
    }

    deleteProduct(id: string) {
        console.log(productUrl + '/' + id);
        return this.http.delete(productUrl + '/' + id);
    }
}