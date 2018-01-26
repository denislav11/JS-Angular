import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { HotProductModel } from '../../../models/product/hot-product-model';
import { Router } from '@angular/router';

@Component({
    templateUrl: './hots.component.html',
    selector: 'hot-products'
})
export class HotsComponent implements OnInit {
    public products: HotProductModel[] = [];

    constructor(
        private service: ProductService,
        private route: Router
    ) {
    }

    ngOnInit() {
        this.service.getHotProducts()
            .subscribe(data => {
                this.products = data;
            });
    }

    getProductDetails(id) {
        this.route.navigate([`/product/${id}`]);
    }
}