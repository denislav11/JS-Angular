import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { components } from './index';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [...components],
    exports: [...components],
    providers: []
})
export class CommonComponentsModule { }