import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { categoryUrl } from '../../../constants';
import { Router } from '@angular/router';
import { CategoryModel } from '../../../models/category/category.model';
import { CategoryService } from '../../../services/category.service';

@Component({
    templateUrl: './categories.component.html'
})
export class AdminCategoriesComponent implements OnInit {
    private categories: CategoryModel[];

    constructor(
        private service: CategoryService,
        private router: Router) {
    }

    ngOnInit() {
        this.getCategories();
    }

    private getCategories() {
        this.service.getAllCategories()
            .subscribe(categories => this.categories = categories);
    }

    private editCategory(id) {
        this.router.navigate(['/admin/categories/edit/', id]);
    }

    private deleteCategory(id) {
        this.router.navigate(['/admin/categories/delete', id])
    }
}