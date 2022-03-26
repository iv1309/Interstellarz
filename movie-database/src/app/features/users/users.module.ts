import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MoviesModule } from '../movies/movies.module';
import { SearchUsersComponent } from './search-users/search-users.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    UserComponent,
    SearchUsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    MoviesModule,
    UsersRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SearchUsersComponent
  ]
})
export class UsersModule { }
