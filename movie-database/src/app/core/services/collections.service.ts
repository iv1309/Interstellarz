import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Collection } from '../model/collection';
import { COLLECTION } from '../model/collection-sample';
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

    return this.http.get<Collection>(url)
    .pipe(
      catchError(this.handleError<Collection>(`getCollection id=${id}`))
    );
  }

  getTotalLength(id: number){
    const url = `${this.collectionsUrl}/${id}`;

    return this.http.get<number>(url)
    .pipe(
      catchError(this.handleError<number>(`getTotalLength id=${id}`))
    );
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

  updateCollection(collection: Collection) {
    return this.http.put(this.collectionsUrl, collection, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateCollection'))
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
