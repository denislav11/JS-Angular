import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";

import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { OrderCreateModel } from "../../models/order/order-create.model";
import { orderUrl } from "../../constants";
import { OrderAdminTableModel } from "../../models/order/order-model";

@Injectable()
export class OrderService {

    constructor(
        private http: HttpClientService,
        private router: Router
    ) { }

    purchase(order: OrderCreateModel): Observable<OrderCreateModel> {
        return this.http.post<OrderCreateModel>(orderUrl, order, 'Kinvey');
    }

    getAllOders(): Observable<OrderAdminTableModel[]> {
        return this.http.get<OrderAdminTableModel[]>(orderUrl)
            .pipe(
            map(data => {
                let arr: OrderAdminTableModel[] = [];

                for (let order of data) {
                    arr.push(new OrderAdminTableModel(
                        order.name,
                        order.address,
                        order.phone,
                        order.total
                    ))
                }
                return arr;
            })
            );
    }
}