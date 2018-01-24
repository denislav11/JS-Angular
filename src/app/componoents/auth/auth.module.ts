import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { components } from './index';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ],
    providers: []
})
export class AuthModule { }