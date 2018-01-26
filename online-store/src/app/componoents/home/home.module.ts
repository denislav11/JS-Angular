import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components } from './index';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ...components
    ],
    exports: [HomeComponent],
    providers: []
})
export class HomeModule { }