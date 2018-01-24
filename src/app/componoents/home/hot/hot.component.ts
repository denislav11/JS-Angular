import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ProductModel } from '../../../models/product/product-model';
import { HotProductModel } from '../../../models/product/hot-product-model';

@Component({
    templateUrl: './hot.component.html',
    selector: 'hot-product'
})
export class HotComponent implements OnChanges {
    @Input() product: HotProductModel;
    @Output() getProductDetails = new EventEmitter<string>();
    private productImg: string;

    getDetails() {
        this.getProductDetails.emit(this.product._id);
    }

    ngOnChanges(changes: any): void {
        this.productImg = changes.product.currentValue.image;
    }
}