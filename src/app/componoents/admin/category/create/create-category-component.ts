import { Component } from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import { Router } from '@angular/router';
import { CreateCategoryModel } from '../../../../models/category/create-category.model';

@Component({
    templateUrl: './create-category-component.html'
})
export class AdminCreateCategoryComponent {
    public model: CreateCategoryModel;

    constructor(
        private service: CategoryService,
        private router: Router
    ) {
        this.model = new CreateCategoryModel('');
    }

    create() {
        this.service.createCategory(this.model)
            .subscribe(
            data => {
                this.router.navigate(['/admin/categories']);
            });;
    }
}