import { CategoriesAction } from '../actions/categories.action';
import { initialState, CategoryState } from '../state/categories.state';
import { CategoryModel } from '../../../models/category/category.model';

export function reducer(state = initialState, action: CategoriesAction.Actions): CategoryState {
    switch (action.type) {
        case CategoriesAction.GET_ALL_CATEGORIES_SUCCESS: {
            debugger
            const allCategories = action.payload as CategoryModel[];

            state.categories = allCategories;

            return Object.assign({}, state, state.categories);
        }
        default: {
            return state;
        }
    }
}