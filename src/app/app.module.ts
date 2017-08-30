import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { LayoutModule } from './layout/layout.module';
import { AuthGuard } from './guard/AuthGuard.guard';
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
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
