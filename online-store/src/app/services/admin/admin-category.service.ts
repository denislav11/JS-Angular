import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";

import { categoryUrl } from '../../constants';
import { ToastsManager } from "ng2-toastr/src/toast-manager";
import { Router } from "@angular/router";

import { AdminCategoryModel } from "../../models/admin/category/admin-category";

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

    editCategory(category: AdminCategoryModel): Observable<AdminCategoryModel> {
        return this.http.put<AdminCategoryModel>
            (categoryUrl + '/' + category._id, category, 'Kinvey');
    }

    deleteCategory(id: string): Observable<Object> {
        return this.http.delete(categoryUrl + '/' + id, 'Kinvey');
    }
}