import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AdminCategory } from '../../../models/admin/category/admin-category';

@Component({
    templateUrl: './category.component.html',
    selector: 'admin-category'
})
export class AdminCategoryComponent {
    @Input('adminCategoryProp') category: AdminCategory;
    @Output() editCategory = new EventEmitter<string>();
    @Output() deleteCategory = new EventEmitter<string>();

    edit() {
        this.editCategory.emit(this.category._id);
    }

    delete() {
        this.deleteCategory.emit(this.category._id);
    }
}