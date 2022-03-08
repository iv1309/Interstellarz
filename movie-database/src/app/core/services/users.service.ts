import { Injectable } from '@angular/core';
import { User } from '../model/users';
import { USERS } from '../model/user-samples'; 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() { }

  getUsers(): Observable<User[]> {
    const users = of(USERS);
    return users;
  }

  getUser(id: number): Observable<User> {
    const user = USERS.find(p => p.id === id)!;
    return of(user);
  }

}