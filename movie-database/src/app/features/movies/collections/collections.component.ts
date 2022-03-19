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

  collections: Collection[] = [];

  constructor(
    private collectionService: CollectionsService
    ) { }

  ngOnInit(): void {
    this.getCollections()
  }

  onSelect(collection: Collection): void {
    this.getCollections();
  }

  //TO DO
  getCollections(): void{
    this.collectionService.getCollections()
    .subscribe(collections => this.collections = collections.sort((a, b) => (a.name > b.name) ?1:-1));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.collectionService.addCollection({ name } as Collection)
      .subscribe((collection: Collection) => {
        this.collections.push(collection);
      });
  }

  delete(collection: Collection): void {
    this.collections = this.collections.filter(m => m !== collection);
    this.collectionService.deleteCollection(collection.id).subscribe();
  }

  compare(a:Collection, b:Collection): number {
    // Use toUpperCase() to ignore character casing
  const collectionA = a.name.toUpperCase();
  const collectionB = b.name.toUpperCase();

  let comparison = 0;
  if (collectionA > collectionB) {
    comparison = 1;
  } else if (collectionA < collectionB) {
    comparison = -1;
  }
  return comparison;
  }

}
