import { Injectable } from '@angular/core';
import { User } from '../model/users';
import { USERS } from '../model/user-samples'; 
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
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

}