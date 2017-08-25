import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './layout.routing';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [LayoutComponent,DashboardComponent]
})
export class LayoutModule {
}
