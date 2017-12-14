import { Component, OnInit } from "@angular/core";
import { AdminCreateProductModel } from "../../../../models/admin/product/create-product-model";
import { AdminCategoryService } from "../../../../services/admin/admin-category.service";
import { AdminCategory } from "../../../../models/admin/category/admin-category";
import { AdminCreateCategory } from "../../../../models/admin/category/admin-create-category";
import { AdminProductService } from "../../../../services/admin/admin-product.service";
import { ToastsManager } from "ng2-toastr/src/toast-manager";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './product.edit.component.html'
})
export class AdminEditProductComponent implements OnInit {
    private productModel: AdminCreateProductModel;
    private categories: AdminCategory[];
    private productId;

    constructor(
        private categoryService: AdminCategoryService,
        private productService: AdminProductService,
        private toastr: ToastsManager,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.productModel = new AdminCreateProductModel('', 0, '', '', '', '');
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.productId = params['id'];
            this.productService.getProductById(this.productId)
                .subscribe(data => {
                    this.productModel = data;
                    console.log(this.productModel);
                });
        })
        this.categoryService.getAllCategories()
            .subscribe(data => {
                this.categories = data;
            });
    }

    edit() {
        this.productService.editProduct(this.productModel, this.productId)
            .subscribe(data => {
                this.toastr.success("Product edited successfully!");
                this.router.navigate(['/admin/products']);
            })
    }
}