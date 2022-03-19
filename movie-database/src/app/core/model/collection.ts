import { Movie } from "./movies";

export interface Collection {
    id: number;
    name: string;
    array: Movie[];
    size: number;
}