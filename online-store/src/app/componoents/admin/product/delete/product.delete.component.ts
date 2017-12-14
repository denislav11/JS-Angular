import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AdminProductService } from '../../../../services/admin/admin-product.service';

@Component({
    template: ''
})
export class AdminDeleteProductComponent implements OnInit {
    constructor(
        private service: AdminProductService,
        private toastr: ToastsManager,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];

            this.service.deleteProduct(id)
                .subscribe(data => {
                    this.toastr.success('Product deleted successfullt!');
                    this.router.navigate(['/admin/products']);
                });
        })
    }
}