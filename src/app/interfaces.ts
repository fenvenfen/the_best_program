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
}

export interface Shelf {
    id: number,
    tags: number[],
    src: string,
    name: string,
    favorite: boolean,
}

export interface QueryParams {
    search: string,
    tags: Tag[]
}
