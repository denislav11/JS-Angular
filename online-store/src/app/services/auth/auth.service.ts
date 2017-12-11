import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
    baseUrl,
    appKey,
    registerUrl,
    loginUrl,
    logoutUrl
} from '../../constants';

import { HttpClientService } from './http-client.service';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';

@Injectable()
export class AuthService {
    private authToken: string;
    private username: string;
    private role: string;

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
            },
            error => {
                this.handleError(error);
            });
    }

    login(user): void {
        user.username = user.email;

        this.http.post(loginUrl, user, 'Basic')
            .subscribe(user => {
                this.toastr.success('Logged in!');
                this.saveSession(user);
                if (user['role'] === 'admin') {
                    this.router.navigate(['admin']);
                    return;
                }
                this.router.navigate(['']);
            },
            error => {
                this.handleError(error);
            })
    }

    logout(): void {
        this.http.post(logoutUrl, {}, 'Kinvey')
            .subscribe(data => {
                this.toastr.success('Logouted!');
                localStorage.clear();
                this.router.navigate(['/login']);
            },
            error => this.handleError(error));
    }

    private handleError(err) {
        this.toastr.error(err.error.error + ': ' + err.error.description)
    }

    private saveSession(user) {
        this.authToken = user['_kmd'].authtoken;
        this.username = user['username'];
        this.role = user['role'];

        localStorage.setItem('authtoken', this.authToken);
        localStorage.setItem('role', this.role);
        localStorage.setItem('username', this.username);
    }

    public isLoggedIn() {
        return localStorage.getItem('authtoken') !== (undefined || null);
    }

    public getUsername() {
        return localStorage.getItem('username');
    }

    public isAdmin() {
        let isAdmin = localStorage.getItem('role') === 'admin';
        if (!isAdmin) {
            this.toastr.error('Not authorized as admin!');
        }
        return isAdmin;
    }
}