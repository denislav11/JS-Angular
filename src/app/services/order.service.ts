import { Injectable } from "@angular/core";
import { HttpClientService } from "./http-client.service";

import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { OrderCreateModel } from "../models/order/order-create.model";
import { orderUrl } from "../constants";
import { OrderAdminTableModel } from "../models/order/order-model";
import { CartService } from "./cart.service";

@Injectable()
export class OrderService {

    constructor(
        private http: HttpClientService,
        private router: Router,
        private cartService: CartService
    ) { }

    purchase(order: OrderCreateModel): void {
        this.http.post<OrderCreateModel>(orderUrl, order)
            .subscribe(res => {
                this.cartService.emptyCart();
                this.router.navigate(['']);
            });
    }

    getAllOders(
        page: number,
        limit: number,
        sort: string,
        filter: object): Observable<Object> {
        let filterQuery: string = '';

        for (let key in filter) {
            if (filter[key] !== '' && filter[key] !== null) {
                filterQuery += `&${key}=${filter[key]}`;
            }
        }
        return this.http.get<OrderAdminTableModel[]>
            (`${orderUrl}?page=${page}&limit=${limit}&sort=${sort}${filterQuery}`)
            .pipe(
            map(res => {
                let orders: OrderAdminTableModel[] = [];
                let totalOrders: Number = res['totalOrders'];

                for (let order of res['data']) {
                    orders.push(new OrderAdminTableModel(
                        order.customer,
                        order.address,
                        order.phone,
                        order.total,
                        order.orderNumber
                    ))
                }
                return { orders, totalOrders };
            }));
    }
}