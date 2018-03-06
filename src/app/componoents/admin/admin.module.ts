import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2PaginationModule } from 'ng2-pagination';

import { components } from './index';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin-routing';
import { AdminComponent } from './home/admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        RouterModule.forChild(adminRoutes),
        Ng2PaginationModule
    ],
    exports: [AdminComponent]
})
export class AdminModule { }