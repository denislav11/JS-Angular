import { Component, OnInit } from '@angular/core';
import { AdminCategoryService } from '../../../services/admin/category/admin-category.service';

import { HttpClient } from '@angular/common/http';

import { categoryPost } from '../../../constants';
import { AdminCategory } from '../../../models/admin-category';

@Component({
    templateUrl: './categories.component.html'
})
export class AdminCategoriesComponent implements OnInit {
    private categories: AdminCategory[];

    constructor(
        private service: AdminCategoryService) {
    }

    ngOnInit() {
        this.getCategories();
    }

    private getCategories() {
        this.service.getAllCategories()
            .subscribe(categories => this.categories = categories);
    }
}