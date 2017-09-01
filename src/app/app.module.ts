import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.component';
import { LayoutModule } from './layout/layout.module';
import { AuthGuard } from './guard/AuthGuard.guard';
import { AuthenticationService } from './services/authentication.service';
import { EndPointService } from './services/endpoint.service';
import { HttpClient } from './services/http-client.services';
import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes),
   LocalStorageModule.withConfig({
        prefix: 'my-app',
        storageType: 'localStorage'
    }),
   HttpModule
  ],
  providers: [AuthGuard,AuthenticationService,EndPointService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
