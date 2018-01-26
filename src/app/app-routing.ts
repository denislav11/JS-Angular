import { Routes } from '@angular/router';

import { RegisterComponent } from './componoents/auth/register/register.component';
import { HomeComponent } from './componoents/home/home.component';
import { LoginComponent } from './componoents/auth/login/login.component';
import { NotFound } from './componoents/common/errors/not-found.component';
import { LogoutComponent } from './componoents/auth/logout/logout.component';
import { ProductComponent } from './componoents/product/product.component';
import { CheckoutComponent } from './componoents/checkout/checkout.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { CategoryComponent } from './componoents/category/category.compoonent';

export const routes: Routes = [
    { path: "", pathMatch: "full", component: HomeComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "logout", component: LogoutComponent },
    { path: "product/:id", component: ProductComponent },
    { path: "category/:id", component: CategoryComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "admin", loadChildren: "app/componoents/admin/admin.module#AdminModule" },
    { path: "**", component: NotFound }
] 