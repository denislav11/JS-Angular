import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";

import { categoryUrl } from '../../constants';
import { ToastsManager } from "ng2-toastr/src/toast-manager";
import { Router } from "@angular/router";

import { AdminCategory } from "../../models/admin/category/admin-category";

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { AdminCreateCategory } from "../../models/admin/category/admin-create-category";

@Injectable()
export class AdminCategoryService {
    constructor(
        private http: HttpClientService,
        private toastr: ToastsManager,
        private router: Router) { }

    createCategory(categoryBody: AdminCreateCategory): Observable<Object> {
        return this.http.post<AdminCreateCategory>(categoryUrl, categoryBody, 'Kinvey');
    }

    getAllCategories(): Observable<AdminCategory[]> {
        return this.http.get<AdminCategory[]>(categoryUrl)
            .pipe(
            map(categories => {
                let arr: AdminCategory[] = [];
                for (let cat of categories) {
                    arr.push(new AdminCategory(cat.title, cat._id));
                }
                return arr;
            }))
    }

    getCategoryById(id: string): Observable<AdminCategory> {
        return this.http.get<AdminCategory>(categoryUrl + '/' + id)
            .pipe(
            map(category => {
                return new AdminCategory(category.title, category._id);
            }));
    }

    editCategory(category: AdminCategory): Observable<AdminCategory> {
        return this.http.put<AdminCategory>(categoryUrl + '/' + category._id, category, 'Kinvey');
    }

    deleteCategory(id: string): Observable<Object> {
        return this.http.delete(categoryUrl + '/' + id, 'Kinvey');
    }
}