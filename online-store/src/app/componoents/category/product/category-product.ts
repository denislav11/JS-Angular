import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../../models/product/product-model';

@Component({
    templateUrl: './category-product.html',
    selector: 'category-product'
})
export class CategoryPageProduct {
    @Input('productProp') product: ProductModel;
    @Output() getProductDetails = new EventEmitter<string>();
    @Output() buyProduct = new EventEmitter<string>();

    getDetails() {
        this.getProductDetails.emit(this.product._id);
    }

    buy() {
        this.buyProduct.emit(this.product._id);
    }
}