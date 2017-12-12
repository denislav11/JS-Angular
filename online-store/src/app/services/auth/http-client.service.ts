import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { appKey, appSecret } from '../../constants';

import { catchError } from 'rxjs/operators';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Injectable()
export class HttpClientService {
    constructor(
        private http: HttpClient,
        private toastr: ToastsManager
    ) { }

    get<T>(url: string) {
        return this.http.get<T>(url,
            { headers: this.makeHeader('Kinvey') });
    }

    post<T>(url: string, body: any, headerType: string) {
        return this.http.post<T>
            (url, JSON.stringify(body),
            { headers: this.makeHeader(headerType) })
            .pipe(
            catchError(err => this.handleError(err))
            );
    }

    private makeHeader(type: string): HttpHeaders {
        if (type === 'Basic') {
            return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
            })
        } return new HttpHeaders({
            'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
            'Content-Type': 'application/json'
        })

    }

    private handleError(err) {
        this.toastr.error(err.error.error + ': ' + err.error.description)
        return Observable.throw(new Error(err.error.description));
    }
}