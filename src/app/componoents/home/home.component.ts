import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HotProductModel } from '../../models/product/hot-product-model';

@Component({
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    private products: HotProductModel[];
    private SLIDER = 'assets/img/main-slider1.jpg';
    private imageResponsive = 'assets/img/main-slider2.jpg';

    constructor(
        private service: ProductService
    ) { }

    ngOnInit() {
        this.service.getHotProducts()
            .subscribe(data => {
                this.products = data;
            });
    }
}