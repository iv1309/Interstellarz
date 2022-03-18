import { Injectable } from '@angular/core';
import { User } from '../model/users';
import { USERS } from '../model/user-samples'; 
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
  }

  getUser(id: number): Observable<User> {
    const user = USERS.find(p => p.id === id)!;
    return of(user);
  }

}