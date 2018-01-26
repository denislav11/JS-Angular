import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Spinkit } from 'ng-http-loader/spinkits';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public spinkit = Spinkit;
  
  constructor(
    public toastr: ToastsManager,
    vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }
}
