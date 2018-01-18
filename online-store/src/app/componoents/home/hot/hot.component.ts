import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../../models/product/product-model';
import { HotProductModel } from '../../../models/product/hot-product-model';

@Component({
    templateUrl: './hot.component.html',
    selector: 'hot-product'
})
export class HotComponent {
    @Input() product: HotProductModel;
    @Output() getProductDetails = new EventEmitter<string>();

    getDetails() {
        this.getProductDetails.emit(this.product._id);
    }
}