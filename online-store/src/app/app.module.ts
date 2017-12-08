import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './componoents/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './router-module';
import { AuthModule } from './componoents/auth/auth.module';
import { ToastModule } from 'ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopComponent } from './componoents/common/top/top.component';
import { HeaderComponent } from './componoents/common/top/header.component';
import { FooterComponent } from './componoents/common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    AuthModule,
    HomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
