import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allServices } from './index';
import { ToastModule } from 'ng2-toastr';

@NgModule({
    imports: [
        CommonModule,
        ToastModule.forRoot(),
    ],
    providers: [
        ...allServices
    ]
})
export class ServicesModule { }