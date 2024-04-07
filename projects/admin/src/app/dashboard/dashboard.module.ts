import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    LayoutComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
