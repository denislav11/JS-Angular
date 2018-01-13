import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";

import { categoryUrl } from '../../constants';
import { ToastsManager } from "ng2-toastr/src/toast-manager";
import { Router } from "@angular/router";

import { AdminCategoryModel } from "../../models/admin/category/admin-category";

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { AdminCreateCategory } from "../../models/admin/category/admin-create-category";
import { CategoryModel } from "../../models/category/category.model";

@Injectable()
export class AdminCategoryService {
    constructor(
        private http: HttpClientService,
        private toastr: ToastsManager,
        private router: Router) { }

    createCategory(categoryBody: AdminCreateCategory): Observable<Object> {
        return this.http.post<AdminCreateCategory>(categoryUrl, categoryBody);
    }

    editCategory(category: CategoryModel): Observable<CategoryModel> {
        return this.http.put<CategoryModel>
            (categoryUrl + '/' + category.id, category);
    }

    deleteCategory(id: string): Observable<Object> {
        return this.http.delete(categoryUrl + '/' + id);
    }
}