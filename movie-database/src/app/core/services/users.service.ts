import { Injectable } from '@angular/core';
import { User } from '../model/users';
import { USERS } from '../model/user-samples'; 
import { catchError, Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private usersUrl = 'http://localhost:8080/users';

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    .pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
    /**
    const users = of(USERS);
    return users;
    */
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getUser(id: number): Observable<User> {

    const user = USERS.find(p => p.id === id)!;
    return of(user);
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