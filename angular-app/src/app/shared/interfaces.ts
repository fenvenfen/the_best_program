export interface Tag {
    id: number,
    active: boolean,
    name: string
}

export interface Book {
    id: number,
    name: string,
    tags: number[],
    src: string,
    favorite: boolean

}