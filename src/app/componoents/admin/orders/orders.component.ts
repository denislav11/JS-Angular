import { Component, OnInit } from '@angular/core';
import { OrderAdminTableModel } from '../../../models/order/order-model';
import { OrderService } from '../../../services/order.service';

@Component({
    templateUrl: './orders.component.html',
    selector: 'admin-oders'
})
export class OrdersComponent implements OnInit {
    public orders: OrderAdminTableModel[];

    constructor(private ordersService: OrderService) { }

    ngOnInit() {
        this.ordersService.getAllOders()
            .subscribe(data => {
                this.orders = data;
            })
    }
}