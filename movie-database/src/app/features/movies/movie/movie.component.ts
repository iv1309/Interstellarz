import { Component, OnInit } from '@angular/core';

import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/core/model/movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[] =[];

  constructor (private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies()
    .subscribe(movies => this.movies = movies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.moviesService.addMovie({ name } as Movie)
      .subscribe((movie: Movie) => {
        this.movies.push(movie);
      });
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
    this.moviesService.deleteMovie(movie.id).subscribe();
  }

}
