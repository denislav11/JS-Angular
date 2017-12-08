import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { RegisterComponent } from './componoents/auth/register/register.component';
import { HomeComponent } from './componoents/home/home.component';
import { LoginComponent } from './componoents/auth/login/login.component';

const routers: Routes = [
    { path: "", pathMatch: "full", component: HomeComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
})
export class AppRouterModule { }