import { Injectable } from "@angular/core";
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";
import { AuthService } from '../../services/auth/auth.service';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
        private toastr: ToastsManager
    ) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkIfLogged(state.url);
    }

    checkIfLogged(url: string) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.toastr.error('You must be authorized!')
        this.router.navigate(["/login"]);
        return false;
    }
}