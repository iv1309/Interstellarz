import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FeaturesRoutingModule } from './features-routing.module';
import { RouterModule} from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component'; 
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    MovieDetailsComponent,
    MovieComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
})
export class FeaturesModule { }
