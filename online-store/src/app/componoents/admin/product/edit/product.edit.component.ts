import { Component, OnInit } from "@angular/core";
import { CreateProductModel } from "../../../../models/create-product-model";
import { CategoryService } from "../../../../services/category.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../../services/product.service";
import { ProductModel } from "../../../../models/product/product-model";
import { CategoryModel } from "../../../../models/category/category.model";

@Component({
    templateUrl: './product.edit.component.html'
})
export class AdminEditProductComponent implements OnInit {
    private productModel: ProductModel;
    private categories: CategoryModel[];

    constructor(
        private categoryService: CategoryService,
        private productsService: ProductService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.productModel = new ProductModel('', '', 0, '', '', '', '');
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.productsService.getProductById(id)
                .subscribe(res => {
                    this.productModel = res['data'];
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
                this.router.navigate(['/admin/products']);
            })
    }
}