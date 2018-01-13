import { CategoryModel } from '../../models/category/category.model';

export interface AppStore {
    categories: CategoryModel[];
}