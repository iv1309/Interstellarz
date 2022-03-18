import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { COLLECTION } from '../model/collection-sample';
import { Collection } from '../model/collection';
import { Movie } from '../model/movies';


@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  private collectionsUrl = 'http://localhost:8080/collections';

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.collectionsUrl)
    .pipe(
      catchError(this.handleError<Collection[]>('getCollections', []))
    );
  }

  getCollection(id: number): Observable<Collection> {
    const url = `${this.collectionsUrl}/${id}`;
    return this.http.get<Collection>(url).pipe(
    catchError(this.handleError<Collection>(`getCollection id=${id}`))
    );
  }

  getMoviesFromCollection(id: number): Observable<Movie[]> {
    const collection = COLLECTION.find(p => p.id === id)!;
    const movies = collection.array;
    return of(movies);
  }

  deleteCollection(id: number): Observable<Collection> {
    const url = `${this.collectionsUrl}/${id}`;

    return this.http.delete<Collection>(url, this.httpOptions).pipe(
      catchError(this.handleError<Collection>('deleteCollection'))
    );
  }

  addCollection(collection: Collection): Observable<Collection> {
    return this.http.post<Collection>(this.collectionsUrl, collection, this.httpOptions).pipe(
      catchError(this.handleError<Collection>('addCollection'))
    );
  }

  addMovieToCollection(movie: Movie, id: number): Observable<Movie> {
    const url = `${this.collectionsUrl}/${id}`;

    return this.http.post<Movie>(url, movie, this.httpOptions).pipe(
      catchError(this.handleError<Movie>('addMovieToCollection'))
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