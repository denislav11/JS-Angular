import { Injectable } from "@angular/core";
import { HttpClientService } from "../../auth/http-client.service";

import { categoryPost } from '../../../constants';
import { ToastsManager } from "ng2-toastr/src/toast-manager";
import { Router } from "@angular/router";

import { AdminCategory } from "../../../models/admin-category";

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AdminCategoryService {

    constructor(
        private http: HttpClientService,
        private toastr: ToastsManager,
        private router: Router) { }

    createCategory(categoryBody: AdminCategory): void {
        this.http.post(categoryPost, categoryBody, 'Kinvey')
            .subscribe(
            data => {
                this.toastr.success("Category created!");
                this.router.navigate(['/admin/categories']);
            });
    }

    getAllCategories(): Observable<AdminCategory[]> {
        return this.http.get<AdminCategory[]>(categoryPost)
            .pipe(
            map(categories => {
                let arr: AdminCategory[] = [];
                for (let cat of categories) {
                    arr.push(new AdminCategory(cat.title));
                }
                return arr;
            }))
    }
}