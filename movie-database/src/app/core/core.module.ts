import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from '../features/features-routing.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    DashboardComponent
  ],
  declarations: [HeaderComponent, DashboardComponent]
})
export class CoreModule { }
