import { NgModule } from '@angular/core';
import { AdminGuard } from './admin/admin.guard';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
    providers: [AdminGuard, AuthGuard],
    imports: [CommonModule]
})
export class GuardsModule { }