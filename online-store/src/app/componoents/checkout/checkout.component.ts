import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { AuthService } from '../../services/auth.service';
import { ProductModel } from '../../models/product/product-model';
import { OrderService } from '../../services/order.service';
import { OrderCreateModel } from '../../models/order/order-create.model';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
    private user: UserModel;
    private comment: string;
    private total: number = 0;

    private shoppingCartItems$: Observable<ProductModel[]> = of([]);
    private shoppingCartItems: ProductModel[] = [];

    constructor(
        private basketService: CartService,
        private userService: AuthService,
        private orderService: OrderService,
        private router: Router
    ) {
        this.user = new UserModel('', '', '', '', '', [], '');

        this.shoppingCartItems$ = this.basketService.getItems();
        this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);

        this.shoppingCartItems.map((el, ind) => {
            this.total += el.price;
        });
    }

    ngOnInit() {
        if (this.userService.isLoggedIn()) {
            this.userService.getCurrentUser()
                .subscribe(res => {
                    this.user = res['data'];
                });
        }
    }

    purchase() {
        let model = new OrderCreateModel(
            this.user.name,
            this.user.address,
            this.user.phone,
            this.user.email,
            this.total,
            this.comment,
            this.shoppingCartItems.map((pr, ind) => {
                return pr._id
            })
        );
        this.orderService.purchase(model);
    }
}