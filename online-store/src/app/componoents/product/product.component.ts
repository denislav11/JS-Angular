import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { ProductModel } from "../../models/product/product-model";
import { AuthService } from "../../services/auth.service";
import { BasketCreateModel } from "../../models/basket/basket-create.model";
import { BasketService } from "../../services/basket.service";

@Component({
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
    private product: ProductModel;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router,
        private basketService: BasketService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.productService.getProductById(id)
                .subscribe(res => {
                    this.product = res['data'];
                });
        })
    }

    orderProduct() {
        debugger
        this.basketService.addToCart(this.product._id);
    }
}