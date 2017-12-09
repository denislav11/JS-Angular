import { Routes } from '@angular/router';

import { RegisterComponent } from './componoents/auth/register/register.component';
import { HomeComponent } from './componoents/home/home.component';
import { LoginComponent } from './componoents/auth/login/login.component';
import { NotFound } from './componoents/common/errors/not-found.component';
import { LogoutComponent } from './componoents/auth/logout/logout.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", component: HomeComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "logout", component: LogoutComponent },
    { path: "**", component: NotFound }
] 