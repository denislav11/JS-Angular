import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    templateUrl: './header.component.html',
    selector: 'header'
})
export class HeaderComponent {
    private LOGO = '../../../../assets/img/logo.png';
    private LOGO_SMALL = '../../../../assets/img/logo-small.png';

    constructor(private auth: AuthService) { }

    showHeader(): boolean {
        return !this.auth.isAdmin();
    }
}