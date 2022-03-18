import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from 'src/app/core/model/movies';
import { CollectionsService } from 'src/app/core/services/collections.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collection: Movie[] = [];

  constructor(
    private collectionService: CollectionsService,
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
    .subscribe(movies => this.collection = movies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.collection.push({ name } as Movie);
    //search for movie
  }

  delete(movie: Movie): void {
    this.collection.splice(movie.id,1);
  }

  goBack(): void {
    this.location.back();
  }


}
