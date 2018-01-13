import { CategoryModel } from '../../../models/category/category.model';

export interface CategoryState {
    categories: Array<CategoryModel>;
}

export const initialState: CategoryState = {
    categories: []
}