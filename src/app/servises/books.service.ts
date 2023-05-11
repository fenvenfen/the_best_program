import { Injectable } from '@angular/core';
import { Book, Shelf, QueryParams } from '../interfaces';

@Injectable({
    providedIn: 'root',
})

export class BookService {
    bookCollections: Book[] = [
        {
        tags: [2],
        name: 'The Godfather',
        favorite: false,
        src: 'https://m.media-amazon.com/images/I/41pSXiKR39L._SX324_BO1,204,203,200_.jpg',
        id: 1,
        },
        {
        tags: [3, 4, 5],
        name: 'The Silence of the Lambs',
        favorite: false,
        src: 'https://m.media-amazon.com/images/I/519n1y9Q9kL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        id: 2,
        },
        {
        tags: [6, 23, 27],
        name: 'The Shawshank Redemption',
        favorite: true,
        src: 'https://m.media-amazon.com/images/I/51HX9XQ9HBL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        id: 3,
        },
        {
        tags: [5, 6],
        name: 'The Da Vinci Code',
        favorite: false,
        src: 'https://m.media-amazon.com/images/I/41wy5DBifEL._SX319_BO1,204,203,200_.jpg',
        id: 4,
        },
        {
        tags: [1],
        name: 'The Girl with the Dragon Tattoo',
        favorite: false,
        src: 'https://m.media-amazon.com/images/I/41quWoJq+8L._SY344_BO1,204,203,200_.jpg',
        id: 5,
        },
        {
        tags: [2],
        name: 'To Kill a Mockingbird',
        favorite: true,
        src: 'https://m.media-amazon.com/images/I/51cTCiLMNAL._SX339_BO1,204,203,200_.jpg',
        id: 6,
        },
        {
        tags: [3],
        name: 'One Hundred Years of Solitude',
        favorite: false,
        src: 'https://m.media-amazon.com/images/I/51IfaP5qfoL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        id: 7,
        },
        {
        tags: [4, 7],
        name: 'The Great Gatsby',
        favorite: false,
        src: 'https://m.media-amazon.com/images/I/41CPOyQP6xL._SX331_BO1,204,203,200_.jpg',
        id: 8,
        },
        {
        tags: [8, 19],
        name: 'Jurassic Park',
        favorite: true,
        src: 'https://m.media-amazon.com/images/I/513qk1TGinL._SX323_BO1,204,203,200_.jpg',
        id: 9,
        },
        {
        tags: [2, 3, 4, 5, 6],
        name: 'The Shining',
        favorite: true,
        src: 'https://m.media-amazon.com/images/I/51jSPyJ8v2L._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        id: 10,
        },
        {
        tags: [3],
        name: 'The Martian',
        favorite: false,
        src: 'https://m.media-amazon.com/images/I/51Bw27SCLDL._SY498_BO1,204,203,200_.jpg',
        id: 11,
        },
        {
        tags: [4],
        name: 'The Hobbit',
        favorite: false,
        src: 'https://m.media-amazon.com/images/I/41DfP7NpIIL._SX327_BO1,204,203,200_.jpg',
        id: 12,
        },
    ];

    shelfsCollections: Shelf[] = [
        {
        id: 1,
        tags: [2, 3],
        src: 'https://m.media-amazon.com/images/I/71-k7upkQjL._AC_SX444_SY639_FMwebp_QL65_.jpg',
        name: 'The Lord of the Rings',
        favorite: false,
        },
        {
        id: 2,
        tags: [6, 4],
        src: 'https://m.media-amazon.com/images/I/61wOt39gY6L._AC_UF1000,1000_QL80_FMwebp_.jpg',
        name: 'The Hunger Games',
        favorite: false,
        },
        {
        id: 3,
        tags: [6, 5],
        src: 'https://m.media-amazon.com/images/I/71szrqzf22L._AC_UF1000,1000_QL80_FMwebp_.jpg',
        name: 'The Chronicles of Narnia',
        favorite: true,
        },
        {
        id: 4,
        tags: [11.23],
        src: 'https://m.media-amazon.com/images/I/91r0dvXhNGL._AC_UF1000,1000_QL80_FMwebp_.jpg',
        name: 'Harry Potter',
        favorite: false,
        },
        {
        id: 5,
        tags: [30, 6],
        src: 'https://m.media-amazon.com/images/I/91lFJOYspuL._AC_UF1000,1000_QL80_FMwebp_.jpg',
        name: "The Hitchhiker's Guide to the Galaxy",
        favorite: false,
        },
        {
        id: 6,
        tags: [15, 13],
        src: 'https://m.media-amazon.com/images/I/91hPXkwnaeL._AC_UF1000,1000_QL80_FMwebp_.jpg',
        name: 'Game of Thrones',
        favorite: false,
        },
        {
        id: 7,
        tags: [18, 11],
        src: 'https://m.media-amazon.com/images/I/91AXiPhTuoL._AC_UF1000,1000_QL80_FMwebp_.jpg',
        name: 'Percy Jackson and the Olympians',
        favorite: true,
        },
        {
        id: 8,
        tags: [2, 3],
        src: 'https://m.media-amazon.com/images/I/715ViOMJmIL._AC_SX444_SY639_FMwebp_QL65_.jpg',
        name: 'The Dark Tower',
        favorite: false,
        },
        {
        id: 9,
        tags: [2, 3],
        src: 'https://m.media-amazon.com/images/I/51jQChB+fmL._AC_UF1000,1000_QL80_FMwebp_.jpg',
        name: 'The Wheel of Time',
        favorite: true,
        },
        {
        id: 10,
        tags: [1, 3],
        src: 'https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_FMwebp_.jpg',
        name: 'Dune',
        favorite: true,
        },
        {
        id: 11,
        tags: [4, 5],
        src: 'https://m.media-amazon.com/images/I/91VelHkK8yL._AC_UF1000,1000_QL80_FMwebp_.jpg',
        name: 'The Mortal Instruments',
        favorite: false,
        },
        {
        id: 12,
        tags: [5, 6],
        src: 'https://m.media-amazon.com/images/I/71IkcEies6L._AC_UF1000,1000_QL80_FMwebp_.jpg',
        name: 'The Maze Runner',
        favorite: false,
        },
    ];

    query: QueryParams = {
        search: '',
        tags: []
    }

    constructor() {}

    changeQueryParams(queryParams: QueryParams): void {
        this.query = queryParams;
    }

    getBooks() {
        let books = [...this.bookCollections];

        books = books.filter(book => {
            const doesBookNameContainQuerySearchParam = book.name.toLowerCase().includes(this.query.search.toLowerCase());
            const doesBookTagContainQueryTag = book.tags.some(tag => this.query.tags.includes(tag));

            if (this.query.search && !doesBookNameContainQuerySearchParam) { return false};
            if (this.query.tags.length !== 0 && !doesBookTagContainQueryTag) { return false }
            return true;
        })

        return books;
    }

    getShelves() {
        let shelves = [...this.shelfsCollections];
        
        shelves = shelves.filter(shelf => {
            const doesShelfNameContainQuerySearchParam = shelf.name.toLowerCase().includes(this.query.search.toLowerCase());
            const doesShelfTagContainQueryTag = shelf.tags.some(tag => this.query.tags.includes(tag));
            
            if (this.query.search && !doesShelfNameContainQuerySearchParam) {return false};
            if (this.query.tags.length !== 0 && !doesShelfTagContainQueryTag) { return false }
            return true;
        })

        return shelves;
    }

    changeFavoriteShelf(isFavorite: boolean, index: number): void {
        this.shelfsCollections[index].favorite = isFavorite;
    }
    changeFavoriteBook(isFavorite: boolean, index: number): void {
        this.bookCollections[index].favorite = isFavorite;

    }

    deleteBook(id: number): void {
        const index = this.bookCollections.findIndex(book => id === book.id)
        this.bookCollections.splice(index, 1);
        this.getBooks();
    }
}
