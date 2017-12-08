import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from '../../services/auth.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    exports: [
        RegisterComponent,
        LoginComponent
    ],
    providers: [AuthService]
})
export class AuthModule { }