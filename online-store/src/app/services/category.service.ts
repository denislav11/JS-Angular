import { Injectable } from "@angular/core";
import { HttpClientService } from "./http-client.service";

import { categoryUrl } from '../constants';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { CategoryModel } from "../models/category/category.model";
import { CreateCategoryModel } from "../models/category/create-category.model";

@Injectable()
export class CategoryService {
    constructor(
        private http: HttpClientService) { }

    createCategory(categoryBody: CreateCategoryModel): Observable<Object> {
        return this.http.post<CreateCategoryModel>(categoryUrl, categoryBody);
    }

    editCategory(category: CategoryModel): Observable<CategoryModel> {
        return this.http.put<CategoryModel>(categoryUrl, category);
    }

    deleteCategory(id: string): Observable<Object> {
        return this.http.delete(categoryUrl + '/' + id);
    }

    getAllCategories(): Observable<CategoryModel[]> {
        return this.http.get<CategoryModel[]>(categoryUrl)
            .pipe(
            map(res => {
                let arr: CategoryModel[] = [];
                for (let cat of res['data']) {
                    arr.push(new CategoryModel(cat.title, cat._id));
                }
                return arr;
            }));
    }

    getCategoryById(id: string): Observable<CategoryModel> {
        return this.http.get<CategoryModel>(categoryUrl + '/' + id)
            .pipe(
            map(res => {
                let category = res['data'];
                return new CategoryModel(category.title, category._id);
            }));
    }
}