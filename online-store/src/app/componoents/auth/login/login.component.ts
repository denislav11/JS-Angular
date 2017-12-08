import { Component, ViewContainerRef } from '@angular/core';
import { UserLogin } from '../../../models/user-login';
import { AuthService } from '../../../services/auth.service';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['../auth.forms.css']
})
export class LoginComponent {
    private model: UserLogin;

    constructor(
        private service: AuthService,
        private toastr: ToastsManager,
        vcr: ViewContainerRef) {
        this.model = new UserLogin('', '');
        this.toastr.setRootViewContainerRef(vcr);
        this.showSuccess();
    }

    showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
    }

    login() {
        this.service.login(this.model)
            .subscribe(data => {
                console.log(data);
            })
    }
}