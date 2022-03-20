import { Collection } from './collection';
import { Movie } from './movies';

export const COL1: Movie[] = [
  { id: 1, name: 'The Batman', releaseDate:"2022", castMembers: "Robert Patterson", studio: "warner brothers", genre: "action"}

  ];
  
export const COL2: Movie[] = [
  { id: 1, name: 'Tangeled', releaseDate:"2016", castMembers: "Jenifer Lopez", studio: "disney", genre: "romance"}

  ];

export const COLLECTION: Collection[] = [
    { id: 1, name: 'Collection 1', array: COL1, size: 3},
    { id: 2, name: 'Collection 2', array: COL2, size: 7}
];
