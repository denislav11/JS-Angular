import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CartService } from '../../../services/cart.service';
import { CategoryService } from '../../../services/category.service';
import { CategoryModel } from '../../../models/category/category.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProductModel } from '../../../models/product/product-model';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { ProductService } from '../../../services/product.service';

@Component({
    templateUrl: './header.component.html',
    selector: 'header'
})
export class HeaderComponent implements OnInit {
    private LOGO = '../../../../assets/img/logo.png';
    private LOGO_SMALL = '../../../../assets/img/logo-small.png';
    private categories: CategoryModel[];

    public shopingCartItems$: Observable<ProductModel[]> = of([]);
    public shopingCartItems: ProductModel[] = [];

    products: Observable<any>;

    targetName = new Subject<any>();

    constructor(
        private auth: AuthService,
        private router: Router,
        private categoryService: CategoryService,
        private basketService: CartService,
        private productService: ProductService) {

        this.productService.debounce(this.targetName).subscribe(e => {
            this.products = e;
        });

        this.shopingCartItems$ = this.basketService.getItems();
        this.shopingCartItems$.subscribe(_ => this.shopingCartItems = _);
    }

    showHeader(): boolean {
        return !this.auth.isAdmin();
    }

    ngOnInit() {
        this.categoryService.getAllCategories()
            .subscribe(data => {
                this.categories = data;
            });
    }

    searchRequest(e) {
        this.targetName.next(e);
    }

    private categoryGetDetails(id) {
        this.router.navigate(['category', id])
    }
}