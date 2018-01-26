import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

@Component({
    template: ''
})
export class AdminDeleteProductComponent implements OnInit {
    constructor(
        private service: ProductService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];

            this.service.deleteProduct(id)
                .subscribe(data => {
                    this.router.navigate(['/admin/products']);
                });
        })
    }
}