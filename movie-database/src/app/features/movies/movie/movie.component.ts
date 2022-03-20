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

  filters = {
    keyword: ''
  }

  constructor (private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMoviesByName();
  }

  onSelect(movie: Movie): void {
    this.getMoviesByName();
  }

  getMoviesByName(): void {
    this.moviesService.getMovies()
    .subscribe(movies => this.movies = this.filterMovies(movies.sort((a, b) => (a.name > b.name) ?1:-1)));
  }

  getMoviesByReleaseDate(): void {
    this.moviesService.getMovies()
    .subscribe(movies => this.movies = this.filterMovies(movies.sort((a, b) => (a.releaseDate > b.releaseDate) ?1:-1)));
  }

  getMoviesByCastMembers(): void {
    this.moviesService.getMovies()
    .subscribe(movies => this.movies = this.filterMovies(movies.sort((a, b) => (a.castMembers > b.castMembers) ?1:-1)));
  }

  getMoviesByGenre(): void {
    this.moviesService.getMovies()
    .subscribe(movies => this.movies = this.filterMovies(movies.sort((a, b) => (a.genre > b.genre) ?1:-1)));
  }

  getMoviesByStudio(): void {
    this.moviesService.getMovies()
    .subscribe(movies => this.movies = this.filterMovies(movies.sort((a, b) => (a.studio > b.studio) ?1:-1)));
  }

  listMovies() {
    this.moviesService.getMovies().subscribe(
      data => this.movies = this.filterMovies(data)
    )
  }

  filterMovies(movies: Movie[]) {
    return movies.filter((e) => {
      return e.name.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
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
