import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CategoriesAction } from '../actions/categories.action';
import { CategoryService } from '../../../services/category/category-service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CategoriesEffects {
    constructor(private service: CategoryService,
        private actions$: Actions) {
    }

    @Effect() getAll$ = this.actions$
        .ofType(CategoriesAction.GET_ALL_CATEGORIES)
        .switchMap((action: CategoriesAction.GetAllCategoriesAction) =>
            this.service.getAllCategories()
                .map(data => new CategoriesAction.GetAllCategoriesSuccessAction(data))
                .catch(() => of(new CategoriesAction.GetAllCategoriesFailAction({}))))
}
