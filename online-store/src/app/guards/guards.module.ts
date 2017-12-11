import { NgModule } from '@angular/core';
import { AdminGuard } from './admin/admin-guard';
import { CommonModule } from '@angular/common';

@NgModule({
    providers: [AdminGuard],
    imports: [CommonModule]
})
export class GuardsModule { }