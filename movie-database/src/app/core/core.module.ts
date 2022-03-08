import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from '../features/features-routing.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class CoreModule { }
