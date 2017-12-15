import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";

import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { OrderCreateModel } from "../../models/order/order-create.model";
import { orderUrl } from "../../constants";

@Injectable()
export class OrderService {

    constructor(
        private http: HttpClientService,
        private router: Router
    ) { }

    purchase(order: OrderCreateModel): Observable<OrderCreateModel> {
        return this.http.post<OrderCreateModel>(orderUrl, order, 'Kinvey');
    }
}