import { Injectable } from "@angular/core";
import { HttpClientService } from "./http-client.service";
import { BasketCreateModel } from "../models/basket/basket-create.model";
import { registerUrl } from "../constants";
import { UserModel } from "../models/user-model";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable()
export class BasketService {
    private itemsInCartSubject: BehaviorSubject<string[]> = new BehaviorSubject([]);
    private itemsInCart: string[] = [];
    private currentUser: UserModel;

    constructor(
        private http: HttpClientService,
        private userService: AuthService,
        private router: Router
    ) {
        this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
    }


    public addToCart(item: string) {
        this.itemsInCartSubject.next([...this.itemsInCart, item]);
    }

    public getItems(): Observable<string[]> {
        return this.itemsInCartSubject;
    }

    addProduct(basket: BasketCreateModel) {
        this.userService.getCurrentUser()
            .subscribe(user => {
                this.currentUser = user;
                this.currentUser.products.push(basket.productId);

                return this.http.put(registerUrl + '/' + user._id, this.currentUser)
                    .subscribe(user => {

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
                    this.currentUser).subscribe(data => {
                        this.router.navigate(['']);
                    });
            })
    }
}