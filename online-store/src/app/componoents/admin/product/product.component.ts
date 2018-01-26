import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AdminProductTableModel } from '../../../models/admin/product/product-table-model';

@Component({
    templateUrl: './product.component.html',
    selector: 'admin-product'
})
export class AdminProductComponent {
    @Input('adminProductProp') product: AdminProductTableModel;
    @Output() editProduct = new EventEmitter<string>();
    @Output() deleteProduct = new EventEmitter<string>();

    edit() {
        this.editProduct.emit(this.product._id);
    }

    delete() {
        this.deleteProduct.emit(this.product._id);
    }
}