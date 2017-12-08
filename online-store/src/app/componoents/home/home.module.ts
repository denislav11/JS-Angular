import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TopComponent } from '../common/top/top.component';
import { HeaderComponent } from '../common/top/header.component';
import { HomeAdvantagesComponent } from './advantages/home.advantages.component';
import { HomeHotComponent } from './hot/home.hot.component';
import { HomeInspiredComponent } from './inspired/home.inspired.component';
import { HomeBlogComponent } from './blog/home.blog.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        HomeComponent,
        HomeAdvantagesComponent,
        HomeHotComponent,
        HomeInspiredComponent,
        HomeBlogComponent
    ],
    exports: [HomeComponent],
    providers: []
})
export class HomeModule { }