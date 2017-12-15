import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { components } from './index';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [...components],
    exports: [...components]
})
export class CheckoutModule { }