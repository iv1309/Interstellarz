import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/model/movies';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  movies: Movie[] =[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getCollections()
  }

  onSelect(movie: Movie): void {
    this.getCollections();
  }

  //TO DO
  getCollections(): void{
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
