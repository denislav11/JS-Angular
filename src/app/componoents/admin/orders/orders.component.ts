import { Component, OnInit } from '@angular/core';
import { OrderAdminTableModel } from '../../../models/order/order-model';
import { OrderService } from '../../../services/order.service';

@Component({
    templateUrl: './orders.component.html',
    selector: 'admin-oders'
})
export class OrdersComponent implements OnInit {
    itemsPerPage: number = 10;
    currentPage: number = 1;
    totalItems: number;
    sortBy: string = '-data';
    filterBy = {};

    orders: OrderAdminTableModel[];

    constructor(private ordersService: OrderService) {
        this.filterBy['orderNumber'] = '';
        this.filterBy['customer'] = '';
    }

    ngOnInit() {
        this.getOrders();
    }

    onChange(e) {
        this.getOrders();
    }

    getOrders() {
        this.ordersService.getAllOders(
            this.currentPage,
            this.itemsPerPage,
            this.sortBy,
            this.filterBy)
            .subscribe(res => {
                this.orders = res['orders'];
                this.totalItems = res['totalOrders'];
            });
    }

    pageChange(e) {
        this.currentPage = e;
        this.getOrders();
    }

    sort(e) {
        this.currentPage = 1;
        let sorted = e.target.id;
        if (this.sortBy !== sorted) {
            this.sortBy = sorted;
        } else {
            this.sortBy = `-${sorted}`;
        }
        this.getOrders()
    }
}