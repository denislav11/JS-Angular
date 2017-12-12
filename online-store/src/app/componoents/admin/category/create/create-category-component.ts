import { Component } from '@angular/core';
import { AdminCategory } from '../../../../models/admin-category';
import { AdminCategoryService } from '../../../../services/admin/category/admin-category.service';

@Component({
    templateUrl: './create-category-component.html'
})
export class AdminCreateCategoryComponent {
    private model: AdminCategory;

    constructor(private service: AdminCategoryService) {
        this.model = new AdminCategory('');
    }

    create() {
        this.service.createCategory(this.model);
    }
}