import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { CategoryModel } from '../../models/category/category.model';
import { ProductModel } from '../../models/product/product-model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
    templateUrl: './category.compoonent.html'
})
export class CategoryComponent implements OnInit {
    public category: CategoryModel;
    public products: ProductModel[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private categoryService: CategoryService,
        private productService: ProductService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.categoryService.getCategoryById(id)
                .subscribe(res => {
                    this.category = res;
                    this.productService.getAllProducts(`?q=${id}`)
                        .subscribe(data => {
                            this.products = data;
                        })
                })
        });
    }

    private getProductDetails(id) {
        this.router.navigate(['product', id])
    }
}