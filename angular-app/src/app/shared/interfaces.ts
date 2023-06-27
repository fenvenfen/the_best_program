export interface Tag {
    id: number,
    active: boolean,
    name: string,
    timesUsed: number
}

export interface Book {
    id: number,
    name: string,
    tags: number[],
    src: string,
    favorite: boolean,
    date: string,
    forAdults: boolean
}

export interface Credentials {
    email: any;
    password: any;
}

export interface User {
    name: string;
    email: string;
    token: string;
    admin: boolean;
}