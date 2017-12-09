import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { appKey, appSecret } from '../../constants';

@Injectable()
export class HttpClientService {
    constructor(
        private http: HttpClient
    ) { }

    get<T>(url: string): Observable<Object> {
        return this.http.get(url);
    }

    post<T>(url: string, body: any, headerType: string): Observable<Object> {
        return this.http.post(url,
            JSON.stringify(body),
            { headers: this.makeHeader(headerType) });
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
}