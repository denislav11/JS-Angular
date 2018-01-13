import { Component } from '@angular/core';
import { BaseComponent } from '../../base.component';

import { AuthService } from '../../../services/auth/auth.service';
import { BasketService } from '../../../services/basket/basket.service';
import { CategoryService } from '../../../services/category/category-service';

import { Router } from '@angular/router';

import { selectCategory } from '../../../core/store/reducers/index';
import { Store } from '@ngrx/store';

import { RootState } from '../../../core/store/state/root-state';
import { CategoriesAction } from '../../../core/store/actions/categories.action';
import { CategoryModel } from '../../../models/category/category.model';


@Component({
    templateUrl: './header.component.html',
    selector: 'header'
})
export class HeaderComponent extends BaseComponent {
    private LOGO = '../../../../assets/img/logo.png';
    private LOGO_SMALL = '../../../../assets/img/logo-small.png';

    private categories: CategoryModel[];

    constructor(
        private auth: AuthService,
        private router: Router,
        private categoryService: CategoryService,
        private store$: Store<RootState>) {

        super();

        this.store$.select(selectCategory)
            .subscribe(categories => {
                console.log(categories);
            })
    }



    showHeader(): boolean {
        return !this.auth.isAdmin();
    }

    private categoryGetDetails(id) {
        this.router.navigate(['category', id])
    }
}