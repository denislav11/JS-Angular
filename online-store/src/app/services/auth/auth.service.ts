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

    constructor(
        private http: HttpClientService,
        private toastr: ToastsManager,
        private router: Router) { }

    register(user): void {
        user.username = user.email;

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
                console.log(user);
                this.toastr.success('Logged in!');
                this.saveSession(user);
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
        localStorage.setItem('authtoken', this.authToken);
        localStorage.setItem('username', this.username);
    }

    public isLoggedIn() {
        return this.authToken === localStorage.getItem('authtoken');
    }

    public getUsername() {
        if (this.isLoggedIn) {
            return this.username;
        }
    }
}