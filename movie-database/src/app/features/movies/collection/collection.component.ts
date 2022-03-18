import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from 'src/app/core/model/movies';
import { MoviesService } from 'src/app/core/services/movies.service';
import { CollectionsService } from 'src/app/core/services/collections.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private collectionService: CollectionsService,
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getMoviesFromCollection()
  }

  onSelect(movie: Movie): void {
    this.getMoviesFromCollection();
  }

  //TO DO
  getMoviesFromCollection(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.collectionService.getMoviesFromCollection(id)
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

  goBack(): void {
    this.location.back();
  }


}
