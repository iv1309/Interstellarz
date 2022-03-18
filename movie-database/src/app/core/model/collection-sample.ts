import { Collection } from './collection';
import { Movie } from './movies';

export const COL1: Movie[] = [
    { id: 1, name: 'The Batman' },
    { id: 2, name: 'Interstellar' },
    { id: 3, name: 'Your Name' }
  ];
  
export const COL2: Movie[] = [
    { id: 4, name: 'Tangeled' },
    { id: 5, name: 'Harry Potter' },
    { id: 6, name: 'Die Hard' },
    { id: 7, name: 'The 5th Element' },
    { id: 8, name: 'The Sixth Sense' },
    { id: 9, name: 'Alien' },
    { id: 10, name: 'The Joker' }
  ];

export const COLLECTION: Collection[] = [
    { id: 1, name: 'Collection 1', array: COL1},
    { id: 2, name: 'Collection 2', array: COL2}
];