import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/core/model/movies';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/core/model/users';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: String[] = [];
  users: User[] = [];
  releases: String[] = [];

  constructor(
    private router: Router,
    private moviesService: MoviesService,
    private usersService: UsersService
    ){}

  ngOnInit() {
    this.getMovies();
    this.getNewReleases();
  }

  getMovies(): void {
    this.moviesService.popularMovies()
      .subscribe(movies => this.movies = movies);
  }

  getNewReleases(): void {
      this.moviesService.newReleases()
        .subscribe(release => this.releases = release);
    }

  getUsers(): void{
    this.usersService.getUsers()
    .subscribe(users => this.users = users);
  }

}
