import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
    baseUrl,
    appKey,
    registerUrl,
    loginUrl,
    logoutUrl
} from '../../constants';

import { HttpClientService } from '../http-client.service';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user-model';

@Injectable()
export class AuthService {
    private authToken: string;
    private username: string;
    private role: string;
    private id: string;

    constructor(
        private http: HttpClientService,
        private toastr: ToastsManager,
        private router: Router) { }

    register(user): void {
        user.username = user.email;
        user.role = 'user';

        this.http.post(registerUrl, user, 'Basic')
            .subscribe(user => {
                this.toastr.success('Registered successfully!')
                this.login(user);
            });
    }

    login(user): void {
        user.username = user.email;

        this.http.post(loginUrl, user, 'Basic')
            .subscribe(user => {
                this.toastr.success('Logged in!');
                this.saveSession(user);
                if (this.role === 'admin') {
                    this.router.navigate(['admin']);
                } else {
                    this.router.navigate(['']);
                }
            })
    }

    logout(): void {
        this.http.post(logoutUrl, {}, 'Kinvey')
            .subscribe(data => {
                this.toastr.success('Logouted!');
                localStorage.clear();
                this.router.navigate(['login']);
            });
    }

    getCurrentUser(): Observable<UserModel> {
        if (this.isLoggedIn()) {
            return this.http.get<UserModel>(registerUrl + '/' + this.getUserId());
        }
    }

    private saveSession(user) {
        this.authToken = user['_kmd'].authtoken;
        this.username = user['username'];
        this.role = user['role'];
        this.id = user._id;

        localStorage.setItem('authtoken', this.authToken);
        localStorage.setItem('userId', this.id);
        localStorage.setItem('role', this.role);
        localStorage.setItem('username', this.username);
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem('authtoken') === this.authToken;
    }

    public getUsername(): string {
        return localStorage.getItem('username');
    }

    public isAdmin(): boolean {
        return localStorage.getItem('role') === this.role && (this.role === 'admin');
    }

    public getUserId(): string {
        if (this.isLoggedIn()) {
            return this.id;
        }
    }
}