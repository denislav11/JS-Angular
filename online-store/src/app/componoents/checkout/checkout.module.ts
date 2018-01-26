import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { components } from './index';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [...components],
    exports: [...components]
})
export class CheckoutModule { }