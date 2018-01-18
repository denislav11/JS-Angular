import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ProductModel } from "../models/product/product-model";

@Injectable()
export class CartService {
    private itemsInCartSubject: BehaviorSubject<ProductModel[]> = new BehaviorSubject([]);
    private itemsInCart: ProductModel[] = [];

    constructor(
        private toastr: ToastsManager
    ) {
        this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
    }


    public addToCart(item: ProductModel) {
        this.itemsInCartSubject.next([...this.itemsInCart, item]);
        this.toastr.info('Product added to cart!');
    }

    public getItems(): Observable<ProductModel[]> {
        return this.itemsInCartSubject;
    }
}