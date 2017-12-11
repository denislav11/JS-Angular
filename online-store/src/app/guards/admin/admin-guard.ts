import { Injectable } from "@angular/core";
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";

import { AuthService } from "../../services/auth/auth.service";

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(
        private router: Router,
        private service: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkIsAdmin(state.url);
    }

    private checkIsAdmin(url: string) {
        if (this.service.isAdmin()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}