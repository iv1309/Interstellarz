import { Collection } from './collection';
import { Movie } from './movies';

export const COL1: Movie[] = [
  { id: 1, name: 'The Batman', releaseDate:"2022", castMembers: "Robert Patterson", studio: "warner brothers", genre: "action", rate: 0, watched: false, "length": 0}

  ];
  
export const COL2: Movie[] = [
  { id: 1, name: 'Tangeled', releaseDate:"2016", castMembers: "Jenifer Lopez", studio: "disney", genre: "romance", rate: 0, watched: false, "length": 0}

  ];

export const COLLECTION: Collection[] = [
    { id: 1, name: 'Collection 1', array: COL1, size: 3, length: 0},
    { id: 2, name: 'Collection 2', array: COL2, size: 7, length: 0}
];
