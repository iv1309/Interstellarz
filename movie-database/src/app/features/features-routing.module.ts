import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CollectionComponent } from './movies/collection/collection.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieComponent } from './movies/movie/movie.component';
import { UserComponent } from './users/user/user.component';
 
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(x => x.MoviesModule)},
  { path: 'home',   component: HomeComponent   },
  { path: 'login',   component: LoginComponent   },
  { path: 'detail/:id', component: MovieDetailsComponent },
  { path: 'user', component: UserComponent },
  { path: 'collection/:id', component: CollectionComponent }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }