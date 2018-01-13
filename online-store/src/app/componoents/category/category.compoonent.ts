import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category/category-service';
import { CategoryModel } from '../../models/category/category.model';
import { ProductModel } from '../../models/product/product-model';
import { ProductService } from '../../services/products/product.service';
import { BasketService } from '../../services/basket/basket.service';
import { BasketCreateModel } from '../../models/basket/basket-create.model';

@Component({
    templateUrl: './category.compoonent.html'
})
export class CategoryComponent implements OnInit {
    private category: CategoryModel;
    private products: ProductModel[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private basketService: BasketService,
        private categoryService: CategoryService,
        private productService: ProductService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.categoryService.getCategoryById(id)
                .subscribe(data => {
                    this.category = data;
                    this.productService.getAllProducts()
                        .subscribe(data => {
                            for (let product of data) {
                                if (product.categoryId === id) {
                                    this.products.push(product);
                                }
                            }
                        })
                })
        })

    }

    private getProductDetails(id) {
        this.router.navigate(['product', id])
    }
    private buyProduct(id) {
        let basket = new BasketCreateModel(id)
        this.basketService.addProduct(basket);
    }
}