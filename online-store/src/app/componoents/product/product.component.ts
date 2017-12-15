import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/products/product.service";
import { ProductModel } from "../../models/product/product-model";
import { AuthService } from "../../services/auth/auth.service";
import { BasketCreateModel } from "../../models/basket/basket-create.model";
import { BasketService } from "../../services/basket/basket.service";

@Component({
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
    private product: ProductModel;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private basketService: BasketService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.productService.getProductById(id)
                .subscribe(data => {
                    this.product = data;
                });
        })
    }

    private isLogged() {
        return this.authService.isLoggedIn();
    }
    orderProduct() {
        if (this.isLogged()) {
            let basket = new BasketCreateModel(this.authService.getUserId(), this.product._id);
            this.basketService.addProduct(basket);
        }
        this.router.navigate(['/checkout'])
    }
}