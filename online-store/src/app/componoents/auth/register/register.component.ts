import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { UserRegister } from '../../../models/user-register';

@Component({
    templateUrl: "./register.component.html",
    styleUrls: ['../auth.forms.css']
})
export class RegisterComponent {
    private model: UserRegister;

    constructor(private service: AuthService) {
        this.model = new UserRegister('', '', '', '');
    }

    register(): void {
        this.service.register(this.model);
    }
}