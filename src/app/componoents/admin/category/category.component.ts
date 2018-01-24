import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CategoryModel } from '../../../models/category/category.model';

@Component({
    templateUrl: './category.component.html',
    selector: 'admin-category'
})
export class AdminCategoryComponent {
    @Input('adminCategoryProp') category: CategoryModel;
    @Output() editCategory = new EventEmitter<string>();
    @Output() deleteCategory = new EventEmitter<string>();

    edit() {
        this.editCategory.emit(this.category._id);
    }

    delete() {
        this.deleteCategory.emit(this.category._id);
    }
}