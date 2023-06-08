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