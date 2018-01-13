import { ActionReducerMap, createSelector } from '@ngrx/store';
import { RootState } from '../state/root-state';
import * as fromCategory from './category.reducer';
import { CategoryState } from '../state/categories.state';

export const combineRootReducers: ActionReducerMap<RootState> = {
    category: fromCategory.reducer
}

export const selectCategory = (state: RootState) => state.category; 