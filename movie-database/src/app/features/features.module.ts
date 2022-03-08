import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FeaturesRoutingModule } from './features-routing.module';
import { RouterModule} from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; 

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RouterModule
  ],
  providers: [],
})
export class FeaturesModule { }

