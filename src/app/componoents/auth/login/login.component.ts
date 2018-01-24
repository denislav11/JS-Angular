import { Component } from '@angular/core';
import { UserLogin } from '../../../models/user-login';
import { AuthService } from '../../../services/auth.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    public model: UserLogin;

    constructor(
        private service: AuthService) {
        this.model = new UserLogin('', '');
    }

    login() {
        this.service.login(this.model);
    }
}