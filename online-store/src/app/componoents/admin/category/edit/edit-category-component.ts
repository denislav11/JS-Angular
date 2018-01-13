import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminCategoryModel } from '../../../../models/admin/category/admin-category';
import { AdminCategoryService } from '../../../../services/admin/admin-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { CategoryService } from '../../../../services/category/category-service';
import { CategoryModel } from '../../../../models/category/category.model';

@Component({
    templateUrl: "./edit-category-component.html"
})
export class AdminEditCategoryComponent implements OnInit {
    private model: CategoryModel;
    private id: string;

    constructor(
        private adminService: AdminCategoryService,
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private router: Router,
        private toastr: ToastsManager) {
        this.model = new CategoryModel('', '');
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.categoryService.getCategoryById(id)
                .subscribe(data => {
                    this.model = data;
                })
        })
    }

    edit() {
        this.adminService.editCategory(this.model)
            .subscribe(data => {
                this.toastr.success('Category edited successfully!');
                this.router.navigate(['/admin/categories']);
            })
    }
}