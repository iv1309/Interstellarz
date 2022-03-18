import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COLLECTION } from '../model/collection-sample';
import { Collection } from '../model/collection';
import { Movie } from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(
    private http: HttpClient
  ) { }

  getCollections(): Observable<Collection[]> {
    const collection = of(COLLECTION);
    return collection;
  }

  getCollection(id: number): Observable<Collection> {
    const collection = COLLECTION.find(p => p.id === id)!;
    return of(collection);
  }

  getMoviesFromCollection(id: number): Observable<Movie[]> {
    const collection = COLLECTION.find(p => p.id === id)!;
    const movies = collection.array;
    return of(movies);
  }
  
}
