import { Component, OnInit } from '@angular/core';
import { AdminProductTableModel } from '../../../models/admin/product/product-table-model';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class AdminProductsComponent implements OnInit {
    public products: AdminProductTableModel[];

    constructor(
        private productsService: ProductService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getProducts();
    }

    private getProducts() {
        this.productsService.getAllProducts('')
            .subscribe(data => {
                this.products = data;
            });
    }

    private editProduct(id) {
        this.router.navigate(['/admin/products/edit', id])
    }

    private deleteProduct(id) {
        this.router.navigate(['/admin/products/delete', id])
    }
}