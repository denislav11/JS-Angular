import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../../services/category.service';
import { CategoryModel } from '../../../../models/category/category.model';

@Component({
    templateUrl: "./edit-category-component.html"
})
export class AdminEditCategoryComponent implements OnInit {
    private model: CategoryModel;
    private id: string;

    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private router: Router) {
        this.model = new CategoryModel('', '', []);
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
        this.categoryService.editCategory(this.model)
            .subscribe(data => {
                this.router.navigate(['/admin/categories']);
            })
    }
}