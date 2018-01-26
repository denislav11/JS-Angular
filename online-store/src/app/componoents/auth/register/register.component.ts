import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserRegister } from '../../../models/user/user-register';

@Component({
    templateUrl: "./register.component.html"
})
export class RegisterComponent {
    model: UserRegister;

    constructor(private service: AuthService) {
        this.model = new UserRegister('', '', '', '', '');
    }

    register(): void {
        this.service.register(this.model);
    }
}