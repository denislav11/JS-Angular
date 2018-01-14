import { Component, OnInit } from "@angular/core";
import { CreateProductModel } from "../../../../models/create-product-model";
import { CategoryService } from "../../../../services/category.service";
import { ToastsManager } from "ng2-toastr/src/toast-manager";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../../services/product.service";
import { ProductModel } from "../../../../models/product/product-model";
import { CategoryModel } from "../../../../models/category/category.model";
import { CreateCategoryModel } from "../../../../models/category/create-category.model";

@Component({
    templateUrl: './product.edit.component.html'
})
export class AdminEditProductComponent implements OnInit {
    private productModel: ProductModel;
    private categories: CategoryModel[];

    constructor(
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
        this.productsService.editProduct(this.productModel)
            .subscribe(data => {
                this.toastr.success("Product edited successfully!");
                this.router.navigate(['/admin/products']);
            })
    }
}