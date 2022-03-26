import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MoviesModule } from '../movies/movies.module';
import { SearchUsersComponent } from './search-users/search-users.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    SearchUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MoviesModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SearchUsersComponent
  ]
})
export class UsersModule { }
