import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryModel } from '../../../models/category/category.model';
import { Router } from '@angular/router';

@Component({
    templateUrl: './product-page-category.component.html',
    selector: 'product-page-category'
})
export class ProductPageCategory {
    @Input('categoryProp') category: CategoryModel;
    @Output() categoryGetDetails = new EventEmitter<string>();

    categoryDetails() {
        this.categoryGetDetails.emit(this.category._id);
    }
}