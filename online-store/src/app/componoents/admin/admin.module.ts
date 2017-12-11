import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components } from './index';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin-routing';

@NgModule({
    declarations: [...components],
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes)]
})
export class AdminModule { }