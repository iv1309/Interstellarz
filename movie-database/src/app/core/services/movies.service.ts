import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Movie } from 'src/app/core/model/movies';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private moviesUrl = 'http://localhost:8080/movies';

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(
      catchError(this.handleError<Movie[]>('getMovies', []))
    );
    //const movies = of(MOVIES);
    //return movies;
  }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url).pipe(
    catchError(this.handleError<Movie>(`getMovie id=${id}`))
  );
    //const movie = MOVIES.find(p => p.id === id)!;
    //return of(movie);
  }

  popularMovies(): Observable<String[]> {
      return this.http.get<String[]>(this.moviesUrl + "/popularMovies").pipe(
      catchError(this.handleError<String[]>(`getPopularMovies`))
    );
  }

  newReleases(): Observable<String[]> {
        return this.http.get<String[]>(this.moviesUrl + "/newReleases").pipe(
        catchError(this.handleError<String[]>(`getNewReleases`))
      );
    }

  updateMovie(movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateMovie'))
    );
  }

    amongstFriends(id: number): Observable<String[]> {
      const url = `${this.moviesUrl}/amongstFriends/${id}`;

      return this.http.get<String[]>(url, this.httpOptions).pipe(
        catchError(this.handleError<String[]>('amongstFriends'))
      );
    }

    topTen(id: number): Observable<String[]> {
          const url = `${this.moviesUrl}/topTen/${id}`;
          return this.http.get<String[]>(url, this.httpOptions).pipe(
          catchError(this.handleError<String[]>('topTen'))
        );
        }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions).pipe(
      catchError(this.handleError<Movie>('addMovie'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;

    return this.http.delete<Movie>(url, this.httpOptions).pipe(
      catchError(this.handleError<Movie>('deleteMovie'))
    );
  }

  /* GET heroes whose name contains search term */
  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Movie[]>('searchMovies', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
