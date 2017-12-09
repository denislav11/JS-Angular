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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    CommonComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(routes),
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
