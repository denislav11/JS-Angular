import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { ProductModel } from "../../models/product/product-model";
import { AuthService } from "../../services/auth.service";
import { CartService } from "../../services/cart.service";

@Component({
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
    private product: ProductModel;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router,
        private basketService: CartService) { }

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
        this.basketService.addToCart(this.product);
    }
}