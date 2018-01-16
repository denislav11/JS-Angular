import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { BasketService } from '../../../services/basket/basket.service';
import { CategoryService } from '../../../services/category/category-service';
import { CategoryModel } from '../../../models/category/category-model';
import { Router } from '@angular/router';

@Component({
    templateUrl: './header.component.html',
    selector: 'header'
})
export class HeaderComponent implements OnInit {
    private LOGO = '../../../../assets/img/logo.png';
    private LOGO_SMALL = '../../../../assets/img/logo-small.png';
    private categories: CategoryModel[];

    constructor(
        private auth: AuthService,
        private router: Router,
        private categoryService: CategoryService) { }

    showHeader(): boolean {
        return !this.auth.isAdmin();
    }

    ngOnInit() {
        this.categoryService.getAllCategories()
            .subscribe(data => {
                this.categories = data;
            })
    }

    private categoryGetDetails(id) {
        this.router.navigate(['category', id])
    }
}