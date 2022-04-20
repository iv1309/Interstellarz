import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Recommendation } from '../model/recommendation';


@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  private recommendationsUrl = 'http://localhost:8080/recommendations';

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getRecommendations(): Observable<Recommendation[]> {
    return this.http.get<Recommendation[]>(this.recommendationsUrl)
    .pipe(
      catchError(this.handleError<Recommendation[]>('getRecommendations', []))
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