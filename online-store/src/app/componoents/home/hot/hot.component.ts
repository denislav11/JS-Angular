import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HotProductModel } from '../../../models/product/hot-product-model';

@Component({
    templateUrl: './hot.component.html',
    selector: 'hot'
})
export class HotComponent {
    @Input('hotProp') pr: HotProductModel;
    @Output() getDetails = new EventEmitter<string>();

    details() {
        this.getDetails.emit(this.pr._id);
    }
}