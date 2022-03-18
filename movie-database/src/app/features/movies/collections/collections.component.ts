import { Component, OnInit } from '@angular/core';

import { Collection } from 'src/app/core/model/collection';
import { Movie } from 'src/app/core/model/movies';
import { CollectionsService } from 'src/app/core/services/collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: Collection[] =[];

  constructor(
    private collectionService: CollectionsService
    ) { }

  ngOnInit(): void {
    this.getCollections()
  }

  onSelect(movie: Movie): void {
    this.getCollections();
  }

  //TO DO
  getCollections(): void{
    this.collectionService.getCollections()
    .subscribe(collections => this.collections = collections);
  }

  /**
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.collectionService.addMovie({ name } as Movie)
      .subscribe((movie: Movie) => {
        this.movies.push(movie);
      });
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
    this.moviesService.deleteMovie(movie.id).subscribe();
  }
  */

}
