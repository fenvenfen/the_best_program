export interface Tag {
    id: number;
    active: boolean;
    name: string;
}

export interface Book {
    tags: number[],
    name: string,
    favorite: boolean,
    src: string,
    id: number,
    date: string,
    description: string,
    forAdults: boolean,
}

export interface QueryParams {
    search: string,
    tags: number[]
}

export type DataTypes = "books" | "shelves";

export interface Credentials {
    email: string;
    password: string;
}

export interface User {
    name: string;
    email: string;
    token: string;
    admin: boolean;
}
