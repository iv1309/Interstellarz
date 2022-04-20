import { Movie } from "./movies";

export interface Recommendation{
    id: number;
    name: string;
    array: Movie[];
}