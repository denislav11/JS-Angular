import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { catchError, map } from 'rxjs/operators';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Injectable()
export class HttpClientService {
    constructor(
        private http: HttpClient,
        private toastr: ToastsManager
    ) { }

    get<T>(url: string) {
        return this.http.get<T>(url, { headers: { 'Content-Type': 'application/json' } });
    }

    post<T>(url: string, body: any) {
        return this.http.post<T>
            (url, JSON.stringify(body),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .pipe(
            map(res => {
                this.toastr.success(res['message']);
                return res;
            }),
            catchError(err => this.handleError(err)));
    }

    put<T>(url: string, body: any) {
        return this.http.put(url,
            JSON.stringify(body),
            { headers: {} })
            .pipe(
            catchError(err => this.handleError(err))
            );
    }

    delete<T>(url: string) {
        return this.http.delete<T>(url, { headers: {} })
            .pipe(
            catchError(err => this.handleError(err))
            );
    }

    private handleError(err) {
        if (err.error.messages) {
            for (let er of err.error.messages) {
                this.toastr.error(er);
            }
        } else {
            console.log(err);
            this.toastr.error(err.error.message);
        }
        return Observable.throw(new Error(err.error.message));
    }
}