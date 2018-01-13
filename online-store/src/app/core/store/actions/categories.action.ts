import { Action } from '@ngrx/store';

export namespace CategoriesAction {
    export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
    export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
    export const GET_ALL_CATEGORIES_FAIL = 'GET_ALL_CATEGORIES_FAIL';

    export class GetAllCategoriesAction implements Action {
        public type = GET_ALL_CATEGORIES;

        constructor(public payload: any) {

        }
    }

    export class GetAllCategoriesSuccessAction implements Action {
        public type = GET_ALL_CATEGORIES_SUCCESS;

        constructor(public payload: any) {

        }
    }

    export class GetAllCategoriesFailAction implements Action {
        public type = GET_ALL_CATEGORIES_FAIL;

        constructor(public payload: any) {

        }
    }

    export type Actions =
        GetAllCategoriesAction |
        GetAllCategoriesSuccessAction |
        GetAllCategoriesFailAction;
}