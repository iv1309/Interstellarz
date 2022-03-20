import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionComponent } from './collection/collection.component';
import { FilterMoviesComponent } from './filter-movies/filter-movies.component';


@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailsComponent,
    SearchMovieComponent,
    CollectionsComponent,
    CollectionComponent,
    FilterMoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SearchMovieComponent,
    CollectionsComponent,
    FilterMoviesComponent
  ]
})
export class MoviesModule { }
