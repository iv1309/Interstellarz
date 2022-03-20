import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from 'src/app/core/model/movies';
import { CollectionsService } from 'src/app/core/services/collections.service';
import { Collection } from 'src/app/core/model/collection';
import { COLLECTION } from 'src/app/core/model/collection-sample';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collection: Collection | undefined;
  movies: Movie[] = [];
  //name: String = " ";

  constructor(
    private route: ActivatedRoute,
    private collectionService: CollectionsService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getCollection()
    this.getMoviesInCollection()
  }

  getCollection(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.collectionService.getCollection(id)
      .subscribe(collection => this.collection = collection);
  }

  getMoviesInCollection(){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.collectionService.getMoviesInCollection(id).subscribe(movies =>
      this.movies = movies);
  }

  //TO DO
  add(name: string): void {
    this.movies.push({ name } as Movie);
    /**
    name = name.trim();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!name) { return; }
    this.collectionService.addMovieToCollection({ name } as Movie, id)
      .subscribe((movie: Movie) => {
        this.collection?.array.push({ name } as Movie);
      });
    //search for movie
    //movies end up deleting themselves
    */
  }


  delete(movie: Movie): void {
    this.movies.splice(movie.id,1);
  }


  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.collection) {
      this.collectionService.updateCollection(this.collection)
        .subscribe(() => this.goBack());
    }
  }


}
