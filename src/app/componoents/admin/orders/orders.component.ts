import { Component, OnInit } from '@angular/core';
import { OrderAdminTableModel } from '../../../models/order/order-model';
import { OrderService } from '../../../services/order.service';
import { Subject } from 'rxjs/Subject';

import '../../../../assets/js/admin-order.js';

@Component({
    templateUrl: './orders.component.html',
    selector: 'admin-oders'
})
export class OrdersComponent implements OnInit {
    itemsPerPage: number = 10;
    currentPage: number = 1;
    totalItems: number;
    sortBy: string = '-data';
    allChecked: boolean = false;

    filterBy = {
        'orderNumber': '',
        'customer': '',
        'address': '',
        'phone': '',
        'total': ''
    };
    filterChanged: Subject<any> = new Subject<any>();

    orders: OrderAdminTableModel[];

    constructor(private ordersService: OrderService) {
        this.filterChanged
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(filter => {
                this.getOrders();
            });
    }

    ngOnInit() {
        this.getOrders();
    }

    onChange(e) {
        this.filterChanged.next(e);
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
        if (e.target.id === 'checkAll') {
            this.checkAll();
            return;
        }
        this.currentPage = 1;
        let sorted = e.target.id;
        if (this.sortBy !== sorted) {
            this.sortBy = sorted;
        } else {
            this.sortBy = `-${sorted}`;
        }
        this.getOrders()
    }

    checkAll() {

    }
}