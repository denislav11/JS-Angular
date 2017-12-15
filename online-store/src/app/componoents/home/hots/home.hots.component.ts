import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products/product.service';
import { ProductModel } from '../../../models/product/product-model';
import { HotProductModel } from '../../../models/product/hot-product-model';
import { Router } from '@angular/router';

@Component({
    templateUrl: './home.hots.component.html',
    selector: 'hots',
    styleUrls: ['./hots.component.css']
})
export class HomeHotsComponent implements OnInit {
    private hotProducts: HotProductModel[];

    constructor(
        private router: Router,
        private productsService: ProductService
    ) { }

    ngOnInit() {
        this.productsService.getHotProducts()
            .subscribe(data => {
                this.hotProducts = data;
            })
    }
    getDetails(id) {
        this.router.navigate(['/product', id]);
    }
}