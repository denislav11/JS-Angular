import { Component, OnInit } from "@angular/core";
import { AdminCreateProductModel } from "../../../../models/admin/product/create-product-model";
import { AdminCategoryService } from "../../../../services/admin/admin-category.service";
import { AdminCategoryModel } from "../../../../models/admin/category/admin-category";
import { AdminCreateCategory } from "../../../../models/admin/category/admin-create-category";
import { AdminProductService } from "../../../../services/admin/admin-product.service";
import { ToastsManager } from "ng2-toastr/src/toast-manager";
import { Router } from "@angular/router";
import { CategoryModel } from "../../../../models/category/category.model";
import { CategoryService } from "../../../../services/category/category-service";

@Component({
    templateUrl: './product.create.component.html'
})
export class AdminCreateProductComponent implements OnInit {
    private productModel: AdminCreateProductModel;
    private categories: CategoryModel[];

    constructor(
        private categoryService: CategoryService,
        private productService: AdminProductService,
        private toastr: ToastsManager,
        private router: Router
    ) {
        this.productModel = new AdminCreateProductModel('', 0, '', '', '', '');
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
                console.log(data);
                this.toastr.success('Product created!');
                this.router.navigate(['/admin/products']);
            })
    }
}