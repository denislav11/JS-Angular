import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";
import { BasketCreateModel } from "../../models/basket/basket-create.model";
import { registerUrl } from "../../constants";
import { UserModel } from "../../models/user-model";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import { ToastsManager } from "ng2-toastr/src/toast-manager";

@Injectable()
export class BasketService {
    private currentUser: UserModel;

    constructor(
        private http: HttpClientService,
        private userService: AuthService,
        private router: Router,
        private toastr: ToastsManager
    ) { }

    addProduct(basket: BasketCreateModel) {
        this.userService.getCurrentUser()
            .subscribe(user => {
                this.currentUser = user;
                this.currentUser.products.push(basket.productId);

                return this.http.put(registerUrl + '/' + basket.userId, this.currentUser, 'Kinvey')
                    .subscribe(user => {
                        this.router.navigate(['checkout']);
                    });
            })
    }

    clearProducts() {
        this.userService.getCurrentUser()
            .subscribe(user => {
                this.currentUser = user;
                this.currentUser.products = [];

                this.http.put(registerUrl + '/' +
                    this.userService.getUserId(),
                    this.currentUser, 'Kinvey').subscribe(data => {
                        this.toastr.success('Your order has been processed');
                        this.router.navigate(['']);
                    });
            })
    }
}