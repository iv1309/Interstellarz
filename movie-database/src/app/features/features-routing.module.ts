import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from '../core/services/auth-gaurd.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CollectionComponent } from './movies/collection/collection.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserComponent } from './users/user/user.component';
 
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(x => x.MoviesModule)},
  { path: 'users', loadChildren: () => import('./users/users.module').then(x => x.UsersModule)},
  { path: 'home',   component: HomeComponent}, 
  { path: 'login',   component: LoginComponent},
  { path: 'register',   component: RegisterComponent   },
  { path: 'detail/:id', component: MovieDetailsComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'profile', component: UserComponent, canActivate:[AuthGaurdService] },
  { path: 'collections/:id', component: CollectionComponent, canActivate:[AuthGaurdService] },
  { path: 'logout',   component: LogoutComponent   }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }