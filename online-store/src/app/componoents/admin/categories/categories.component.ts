import { Component, OnInit } from '@angular/core';
import { AdminCategoryService } from '../../../services/admin/admin-category.service';

import { HttpClient } from '@angular/common/http';

import { categoryUrl } from '../../../constants';
import { AdminCategory } from '../../../models/admin/category/admin-category';
import { Router } from '@angular/router';

@Component({
    templateUrl: './categories.component.html'
})
export class AdminCategoriesComponent implements OnInit {
    private categories: AdminCategory[];

    constructor(
        private service: AdminCategoryService,
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