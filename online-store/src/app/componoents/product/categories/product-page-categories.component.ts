import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from '../../../models/category/category-model';
import { CategoryService } from '../../../services/category/category-service';

@Component({
    templateUrl: './product-page-categories.component.html',
    selector: 'product-page-categories'
})
export class ProductPageCategories implements OnInit {
    private categories: CategoryModel[];

    constructor(
        private categoryService: CategoryService,
        private router: Router) { }

    categoryGetDetails(id) {
        this.router.navigate(['category', id]);
    }

    ngOnInit() {
        this.getCategories();
    }

    private getCategories() {
        this.categoryService.getAllCategories()
            .subscribe(data => {
                this.categories = data;
            })
    }
}