import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './core/model/movies';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 1, name: 'The Batman' },
      { id: 2, name: 'Interstellar' },
      { id: 3, name: 'Your Name' },
      { id: 4, name: 'Tangeled' },
      { id: 5, name: 'Harry Potter' },
      { id: 6, name: 'Die Hard' },
      { id: 7, name: 'The 5th Element' },
      { id: 8, name: 'The Sixth Sense' },
      { id: 9, name: 'Alien' },
      { id: 10, name: 'The Joker' }
    ];
    return {movies};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}
