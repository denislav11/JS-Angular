import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
    templateUrl: './top.component.html',
    selector: 'top'
})
export class TopComponent {
    constructor(private auth: AuthService) { }

    isLogged(): boolean {
        return this.auth.isLoggedIn();
    }

    username(): string {
        return this.auth.getUsername();
    }

    showTop(): boolean {
        return !this.auth.isAdmin();
    }
}