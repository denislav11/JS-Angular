import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './componoents/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './componoents/auth/auth.module';
import { ToastModule } from 'ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';

import { routes } from './app-routing';
import { RouterModule } from '@angular/router';
import { CommonComponentsModule } from './componoents/common/common.module';
import { AdminModule } from './componoents/admin/admin.module';
import { GuardsModule } from './guards/guards.module';

import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { ProductModule } from './componoents/product/product.module';
import { CheckoutModule } from './componoents/checkout/checkout.module';
import { CategoryModule } from './componoents/category/category.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    ProductModule,
    CheckoutModule,
    CategoryModule,
    AdminModule,
    CommonComponentsModule,
    GuardsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(routes),
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
