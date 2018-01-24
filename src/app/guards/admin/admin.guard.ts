import { Injectable } from "@angular/core";
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(
        private router: Router,
        private service: AuthService,
        private toastr: ToastsManager) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkIsAdmin(state.url);
    }

    private checkIsAdmin(url: string) {
        if (this.service.isAdmin()) {
            return true;
        }
        this.toastr.error('Not authorized as admin!')
        this.router.navigate(['login']);
        return false;
    }
}