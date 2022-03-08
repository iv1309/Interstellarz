import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOVIES } from 'src/app/core/model/movie-sample';
import { Movie } from 'src/app/core/model/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    const movies = of(MOVIES);
    return movies;
  }

  getMovie(id: number): Observable<Movie> {
    const movie = MOVIES.find(p => p.id === id)!;
    return of(movie);
  }
}
