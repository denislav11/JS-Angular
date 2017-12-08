import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { baseUrl, appKey, registerUrl, loginUrl } from '../constants';
import { makeHeader } from './auth-headers';

import { } from ''

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    register(user): Observable<Object> {
        user.username = user.email;
        return this.http.post(
            registerUrl,
            JSON.stringify(user),
            {
                headers: makeHeader('Basic')
            })
    }

    login(user): Observable<Object> {
        user.username = user.email;
        return this.http.post(
            loginUrl,
            JSON.stringify(user),
            {
                headers: makeHeader('Basic')
            }
        )
    }
}