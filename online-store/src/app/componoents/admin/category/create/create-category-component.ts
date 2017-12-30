import { Component } from '@angular/core';
import { AdminCategoryService } from '../../../../services/admin/admin-category.service';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { Router } from '@angular/router';
import { AdminCreateCategory } from '../../../../models/admin/category/admin-create-category';

@Component({
    templateUrl: './create-category-component.html'
})
export class AdminCreateCategoryComponent {
    private model: AdminCreateCategory;

    constructor(
        private service: AdminCategoryService,
        private toastr: ToastsManager,
        private router: Router
    ) {
        this.model = new AdminCreateCategory('');
    }

    create() {
        this.service.createCategory(this.model)
            .subscribe(res => {
                this.router.navigate(['/admin/categories']);
            });;
    }
}