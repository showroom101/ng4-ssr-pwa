import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgServiceWorker, ServiceWorkerModule } from '@angular/service-worker'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    ServiceWorkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
	constructor(sw: NgServiceWorker) {

	}
}
