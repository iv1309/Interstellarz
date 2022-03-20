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
  length: number = 0;
  //name: String = " ";

  constructor(
    private route: ActivatedRoute,
    private collectionService: CollectionsService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getCollection()
  }

  getCollection(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.collectionService.getCollection(id)
      .subscribe(collection => this.getMoviesInCollection(collection));
  }

  getMoviesInCollection(collection: Collection){
    this.collection = collection;
    this.movies = collection.array;
    this.length = collection.length;
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

  getTotalLength(){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.collectionService.getTotalLength(id).subscribe(length =>
      this.length = length);
  }


  delete(movie: Movie): void {
    this.movies.splice(this.movies.indexOf(movie),1);
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
