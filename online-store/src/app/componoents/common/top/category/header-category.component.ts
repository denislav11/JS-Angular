import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from '../../../../models/category/category-model';

@Component({
    templateUrl: './header-category.component.html',
    selector: 'header-category'
})
export class HeaderPageCategory {
    @Input('categoryProp') category: CategoryModel;
    @Output() categoryGetDetails = new EventEmitter<string>();

    categoryDetails() {
        this.categoryGetDetails.emit(this.category._id);
    }
}