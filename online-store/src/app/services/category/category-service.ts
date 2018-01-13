import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { map } from "rxjs/operators";
import { HttpClientService } from "../http-client.service";

import { categoryUrl } from '../../constants';
import { CategoryModel } from "../../models/category/category.model";
import { AppStore } from "../../core/store/app.store";

@Injectable()
export class CategoryService {
    categories: Observable<Array<CategoryModel>>;

    constructor(
        private http: HttpClientService,
        private store: Store<AppStore>) {

    }

    getAllCategories(): Observable<CategoryModel[]> {
        return this.http.get<CategoryModel[]>(categoryUrl)
        // .pipe(
        // map(categories => {
        //     let arr: CategoryModel[] = [];
        //     for (let cat of categories) {
        //         arr.push(new CategoryModel(cat.title, cat._id));
        //     }
        //     return arr;
        // }))
    }

    getCategoryById(id: string): Observable<CategoryModel> {
        return this.http.get<CategoryModel>(categoryUrl + '/' + id)
            .pipe(
            map(category => {
                return new CategoryModel(category.title, category.id);
            }));
    }
}