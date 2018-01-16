import { Component, OnInit } from "@angular/core";
import { CreateProductModel } from "../../../../models/create-product-model";
import { CategoryService } from "../../../../services/category.service";
import { ProductService } from "../../../../services/product.service";
import { Router } from "@angular/router";
import { CategoryModel } from "../../../../models/category/category.model";

@Component({
    templateUrl: './product.create.component.html'
})
export class AdminCreateProductComponent implements OnInit {
    private productModel: CreateProductModel;
    private categories: CategoryModel[];

    constructor(
        private categoryService: CategoryService,
        private productService: ProductService, 
        private router: Router
    ) {
        this.productModel = new CreateProductModel('', 0, '', '', '', '');
    }

    ngOnInit() {
        this.categoryService.getAllCategories()
            .subscribe(data => {
                this.categories = data;
            });
    }

    create() {
        this.productService.createProduct(this.productModel)
            .subscribe(data => {
                this.router.navigate(['/admin/products']);
            })
    }
}