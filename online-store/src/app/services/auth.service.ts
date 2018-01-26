import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
    baseUrl,
    registerUrl,
    loginUrl,
    logoutUrl,
    userUrl
} from '../constants';

import { HttpClientService } from './http-client.service';
import { Router } from '@angular/router';
import { UserModel } from '../models/user/user-model';

@Injectable()
export class AuthService {
    private authToken: string;
    private email: string;
    private roles: string[] = [];
    private id: string;

    constructor(
        private http: HttpClientService,
        private router: Router) { }

    register(user): void {
        this.http.post(registerUrl, user)
            .subscribe(res => {
                this.login(user);
            });
    }

    login(user): void {
        this.http.post(loginUrl, user)
            .subscribe(res => {
                this.saveSession(res);

                if (this.isAdmin()) {
                    this.router.navigate(['admin']);
                } else {
                    this.router.navigate(['']);
                }
            })
    }

    logout(): void {
        this.http.post(logoutUrl, {})
            .subscribe(res => {
                localStorage.clear();
                this.router.navigate(['']);
            });
    }

    getCurrentUser(): Observable<UserModel> {
        return this.http.get<UserModel>(userUrl + '/' + this.getUserId());
    }

    private saveSession(res) {
        let user = res.user;

        this.authToken = res.token;
        this.email = user['email'];
        this.roles = user['roles'];
        this.id = user._id;

        localStorage.setItem('authtoken', this.authToken);
        localStorage.setItem('email', this.email);
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem('authtoken') === this.authToken;
    }

    public getUsername(): string {
        return this.email;
    }

    public isAdmin(): boolean {
        return this.roles.includes('Admin');
    }

    public getUserId(): string {
        if (this.isLoggedIn()) {
            return this.id;
        }
    }
}