import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { AuthService } from '../../services/auth.service';
import { ProductModel } from '../../models/product/product-model';
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order/order.service';
import { OrderCreateModel } from '../../models/order/order-create.model';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { Router } from '@angular/router';
import { BasketService } from '../../services/basket.service';

@Component({
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
    private user: UserModel;
    private comment: string;
    private products: ProductModel[] = [];
    private total: number = 0;

    constructor(
        private basketService: BasketService,
        private productService: ProductService,
        private userService: AuthService,
        private orderService: OrderService,
        private toastr: ToastsManager,
        private router: Router
    ) {
        this.user = new UserModel('', '', '', '', '', [], '');
    }

    ngOnInit() {
        this.userService.getCurrentUser()
            .subscribe(data => {
                this.user = data;

                this.productService.getAllProducts()
                    .subscribe(products => {
                        for (let pr of this.user.products) {
                            let current = products.filter(p => p._id === pr)[0];
                            this.products.push(current);
                            this.total += current.price;
                        }
                    })
            });

    }

    purchase() {
        console.log(this.user);
        let model = new OrderCreateModel(
            this.user.name,
            this.user.address,
            this.user.telephone,
            this.user.email,
            this.total,
            this.comment,
            this.user.products
        )
        console.log(model);
        this.orderService.purchase(model)
            .subscribe(data => {
                this.basketService.clearProducts();
            })
    }
}