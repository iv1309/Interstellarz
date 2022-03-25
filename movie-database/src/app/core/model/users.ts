import { Collection } from "./collection";

export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    collections: Collection[];
}