import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserRegister } from '../../../models/user-register';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./register.component.html",
    styleUrls: ['../auth.forms.css']
})
export class RegisterComponent {
    private model: UserRegister;
    private registerFail: boolean;
    private registerSuccess: boolean;
    private loading: boolean;
    private errors: string;

    constructor(
        private service: AuthService,
        private router: Router) {
        this.model = new UserRegister('', '', '', '');
        this.registerFail = false;
        this.registerSuccess = false;
        this.loading = false;
    }

    register(): void {
        this.loading = true;

        this.service.register(this.model)
            .subscribe(user => {
                this.registerSuccess = true;
                this.loading = false;
                this.router.navigate(['/']);
            },
            err => {
                this.registerFail = true;
                this.errors = err.error.error + ': ' + err.error.description;
                this.loading = false;
            })
    }
}