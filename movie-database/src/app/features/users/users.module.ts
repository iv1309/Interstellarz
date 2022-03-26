import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MoviesModule } from '../movies/movies.module';
import { SearchUsersComponent } from './search-users/search-users.component';


@NgModule({
  declarations: [
    SearchUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MoviesModule
  ]
})
export class UsersModule { }
