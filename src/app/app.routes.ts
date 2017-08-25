import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

  
export const routes: Routes = [  
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LayoutComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });