import { Component, OnInit } from "@angular/core";
import { AdminCreateProductModel } from "../../../../models/admin/product/create-product-model";
import { AdminCategoryService } from "../../../../services/admin/admin-category.service";
import { AdminCategoryModel } from "../../../../models/admin/category/admin-category";
import { AdminCreateCategory } from "../../../../models/admin/category/admin-create-category";
import { AdminProductService } from "../../../../services/admin/admin-product.service";
import { ToastsManager } from "ng2-toastr/src/toast-manager";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../../services/products/product.service";
import { ProductModel } from "../../../../models/product/product-model";
import { CategoryService } from "../../../../services/category/category-service";
import { CategoryModel } from "../../../../models/category/category.model";

@Component({
    templateUrl: './product.edit.component.html'
})
export class AdminEditProductComponent implements OnInit {
    private productModel: ProductModel;
    private categories: CategoryModel[];

    constructor(
        private adminCategoryService: AdminCategoryService,
        private adminService: AdminProductService,
        private categoryService: CategoryService,
        private productsService: ProductService,
        private toastr: ToastsManager,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.productModel = new ProductModel('', '', 0, '', '', '', '');
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.productsService.getProductById(id)
                .subscribe(data => {
                    this.productModel = data;
                });
        })
        this.categoryService.getAllCategories()
            .subscribe(data => {
                this.categories = data;
            });
    }

    edit() {
        this.adminService.editProduct(this.productModel)
            .subscribe(data => {
                this.toastr.success("Product edited successfully!");
                this.router.navigate(['/admin/products']);
            })
    }
}