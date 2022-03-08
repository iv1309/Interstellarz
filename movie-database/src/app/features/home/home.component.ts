import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/core/model/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private router: Router,
    private moviesService: MoviesService
    ){}

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies()
      .subscribe(movies => this.movies = movies.slice(1, 5));
  }

}
