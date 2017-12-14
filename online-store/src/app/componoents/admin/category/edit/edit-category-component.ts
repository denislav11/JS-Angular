import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminCategory } from '../../../../models/admin/category/admin-category';
import { AdminCategoryService } from '../../../../services/admin/admin-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Component({
    templateUrl: "./edit-category-component.html"
})
export class AdminEditCategoryComponent implements OnInit {
    private model: AdminCategory;
    private id: string;

    constructor(
        private service: AdminCategoryService,
        private route: ActivatedRoute,
        private router: Router,
        private toastr: ToastsManager) {
        this.model = new AdminCategory('', '');
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.service.getCategoryById(id)
                .subscribe(data => {
                    this.model = data;
                })
        })
    }

    edit() {
        this.service.editCategory(this.model)
            .subscribe(data => {
                this.toastr.success('Category edited successfully!');
                this.router.navigate(['/admin/categories']);
            })
    }
}