import { Injectable } from '@angular/core';
import { Book, QueryParams } from '../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookCollections: Book[] = [
    {
      description:
        'What is the first thing you check on a book (after the cover art)? I would bet, whether you’re at the library, at a bookstore, or shopping online, it’s the book description. What does that mean for you as a writer? You need to know how to write a book description, preferably a great one. ',
      tags: [2],
      name: 'The Godfather',
      favorite: false,
      src: 'https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg',
      id: 1,
      forAdults: false,
      date: '2023-07-24 11:54:25.843 +0000',
    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      tags: [3, 4, 5],
      name: 'The Silence of the Lambs',
      favorite: false,
      src: 'https://m.media-amazon.com/images/I/519n1y9Q9kL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      id: 2,
      forAdults: true,
      date: '2021-05-22 03:51:31.843 +0000',
    },
    {
      description:
        'NWhat is the first thing you check on a book (after the cover art)? I would bet, whether you’re at the library, at a bookstore, or shopping online, it’s the book description. What does that mean for you as a writer? You need to know how to write a book description, preferably a great one.',
      tags: [6, 23, 27, 2, 5],
      name: 'The Shawshank Redemption',
      favorite: true,
      src: 'https://m.media-amazon.com/images/I/51HX9XQ9HBL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      id: 3,
      forAdults: false,
      date: '2019-11-30 11:52:31.843 +0000',
    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      tags: [5, 6],
      name: 'The Da Vinci Code',
      favorite: false,
      src: 'https://flixable.b-cdn.net/hbo-max/large/us/the-da-vinci-code.jpg',
      id: 4,
      forAdults: false,
      date: '2023-03-18 11:54:25.843 +0000',
    },
    {
      description:
        'What is the first thing you check on a book (after the cover art)? I would bet, whether you’re at the library, at a bookstore, or shopping online, it’s the book description. What does that mean for you as a writer? You need to know how to write a book description, preferably a great ending. ',
      tags: [1],
      name: 'The Girl with the Dragon Tattoo',
      favorite: false,
      src: 'https://m.media-amazon.com/images/I/41quWoJq+8L._SY344_BO1,204,203,200_.jpg',
      id: 5,
      forAdults: false,
      date: '2021-05-02 03:51:31.843 +0000',
    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      tags: [2],
      name: 'To Kill a Mockingbird',
      favorite: true,
      src: 'https://m.media-amazon.com/images/I/51cTCiLMNAL._SX339_BO1,204,203,200_.jpg',
      id: 6,
      forAdults: true,
      date: '2009-11-12 11:52:31.843 +0000',
    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      tags: [3],
      name: 'One Hundred Years of Solitude',
      favorite: false,
      src: 'https://m.media-amazon.com/images/I/51IfaP5qfoL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      id: 7,
      forAdults: false,
      date: '2023-06-14 11:54:25.843 +0000',
    },
    {
      description:
        'What is the first thing you check on a book (after the cover art)? I would bet, whether you’re at the library, at a bookstore, or shopping online, it’s the book description. What does that mean for you as a writer? You need to know how to write a book description, preferably a great one. garding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      tags: [4, 7],
      name: 'The Great Gatsby',
      favorite: false,
      src: 'https://m.media-amazon.com/images/I/41CPOyQP6xL._SX331_BO1,204,203,200_.jpg',
      id: 8,
      forAdults: false,
      date: '2021-05-02 03:51:31.843 +0000',
    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      tags: [8, 19],
      name: 'Jurassic Park',
      favorite: false,
      src: 'https://m.media-amazon.com/images/I/513qk1TGinL._SX323_BO1,204,203,200_.jpg',
      id: 9,
      forAdults: true,
      date: '2020-11-02 11:52:31.843 +0000',
    },
    {
      description:
        'NWhat is the first thing you check on a book (after the cover art)? I would bet, whether you’re at the library, at a bookstore, or shopping online, it’s the book description. What does that mean for you as a writer? You need to know how to write a book description, preferably a great one.',
      tags: [2, 3, 4, 5, 6],
      name: 'The Shining',
      favorite: true,
      src: 'https://m.media-amazon.com/images/I/51jSPyJ8v2L._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      id: 10,
      forAdults: true,
      date: '2023-03-04 11:54:25.843 +0000',
    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      tags: [3],
      name: 'The Martian',
      favorite: false,
      src: 'https://m.media-amazon.com/images/I/51Bw27SCLDL._SY498_BO1,204,203,200_.jpg',
      id: 11,
      forAdults: false,
      date: '2021-05-02 03:51:31.843 +0000',
    },
    {
      description:
        'NotWhat is the first thing you check on a book (after the cover art)? I would bet, whether you’re at the library, at a bookstore, or shopping online, it’s the book description. What does that mean for you as a writer? You need to know how to write a book description, preferably a great one.',
      tags: [4],
      name: 'The Hobbit',
      favorite: false,
      src: 'https://m.media-amazon.com/images/I/41DfP7NpIIL._SX327_BO1,204,203,200_.jpg',
      id: 12,
      forAdults: false,
      date: '2022-11-02 11:52:31.843 +0000',
    },
  ];

  shelfsCollections: Book[] = [
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      id: 1,
      tags: [2, 3, 6, 29, 25, 22],
      src: 'https://deadline.com/wp-content/uploads/2022/08/lord-of-the-rings-feature-image.jpg?w=1000',
      name: 'The Lord of the Rings',
      favorite: true,
      date: '2023-08-18 11:54:25.843 +0000',
      forAdults: true,
    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      id: 2,
      tags: [6, 4],
      src: 'https://m.media-amazon.com/images/I/61wOt39gY6L._AC_UF1000,1000_QL80_FMwebp_.jpg',
      name: 'The Hunger Games',
      favorite: false,
      date: '2021-05-02 03:51:31.843 +0000',
      forAdults: true,

    },
    {
      description:
        'What is the first thing you check on a book (after the cover art)? I would bet, whether you’re at the library, at a bookstore, or shopping online, it’s the book description. What does that mean for you as a writer? You need to know how to write a book description, preferably a great one. ',
      id: 3,
      tags: [6, 5],
      src: 'https://cdn.vox-cdn.com/thumbor/wknjWA1eDuRCKcOhtiFWMWXTcww=/0x0:1686x816/1200x800/filters:focal(668x248:936x516)/cdn.vox-cdn.com/uploads/chorus_image/image/61633721/narnia.0.jpg',
      name: 'The Chronicles of Narnia',
      favorite: true,
      date: '2012-11-02 11:52:31.843 +0000',
      forAdults: true,

    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      id: 4,
      tags: [11, 23],
      src: 'https://m.media-amazon.com/images/I/91r0dvXhNGL._AC_UF1000,1000_QL80_FMwebp_.jpg',
      name: 'Harry Potter',
      favorite: false,
      date: '2023-03-14 11:54:25.843 +0000',
      forAdults: true,

    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      id: 5,
      tags: [30, 6],
      src: 'https://m.media-amazon.com/images/I/91lFJOYspuL._AC_UF1000,1000_QL80_FMwebp_.jpg',
      name: "The Hitchhiker's Guide to the Galaxy",
      favorite: false,
      date: '2021-05-02 03:51:31.843 +0000',
      forAdults: true,

    },
    {
      description:
        'What is the first thing you check on a book (after the cover art)? I would bet, whether you’re at the library, at a bookstore, or shopping online, it’s the book description. What does that mean for you as a writer? You need to know how to write a book description, preferably a great one.',
      id: 6,
      tags: [15, 13],
      src: 'https://m.media-amazon.com/images/I/91hPXkwnaeL._AC_UF1000,1000_QL80_FMwebp_.jpg',
      name: 'Game of Thrones',
      favorite: false,
      date: '1990-11-12 11:52:31.843 +0000',
      forAdults: true,

    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      id: 7,
      tags: [18, 11],
      src: 'https://m.media-amazon.com/images/I/91AXiPhTuoL._AC_UF1000,1000_QL80_FMwebp_.jpg',
      name: 'Percy Jackson and the Olympians',
      favorite: true,
      date: '2023-09-14 11:54:25.843 +0000',
      forAdults: true,

    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      id: 8,
      tags: [2, 3],
      src: 'https://m.media-amazon.com/images/I/715ViOMJmIL._AC_SX444_SY639_FMwebp_QL65_.jpg',
      name: 'The Dark Tower',
      favorite: false,
      date: '2021-08-02 03:51:31.843 +0000',
      forAdults: true,

    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      id: 9,
      tags: [2, 3],
      src: 'https://m.media-amazon.com/images/I/51jQChB+fmL._AC_UF1000,1000_QL80_FMwebp_.jpg',
      name: 'The Wheel of Time',
      favorite: true,
      date: '2014-11-02 11:52:31.843 +0000',
      forAdults: true,

    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      id: 10,
      tags: [1, 3],
      src: 'https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_FMwebp_.jpg',
      name: 'Dune',
      favorite: true,
      date: '2023-09-14 11:54:25.843 +0000',
      forAdults: true,

    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      id: 11,
      tags: [4, 5],
      src: 'https://m.media-amazon.com/images/I/91VelHkK8yL._AC_UF1000,1000_QL80_FMwebp_.jpg',
      name: 'The Mortal Instruments',
      favorite: false,
      date: '2021-07-22 03:51:31.843 +0000',
      forAdults: true,

    },
    {
      description:
        'Not all of her suggestions were easy to digest. When I first read her idea regarding two important characters, I remember being quite taken aback. I was reluctant to take on some of her notes. She suggested changing the nature of my protagonists’ relationship to each other and, therefore, the impact of the ending. ',
      id: 12,
      tags: [5, 6],
      src: 'https://m.media-amazon.com/images/I/71IkcEies6L._AC_UF1000,1000_QL80_FMwebp_.jpg',
      name: 'The Maze Runner',
      favorite: false,
      date: '2013-12-30 11:52:31.843 +0000',
      forAdults: true,

    },
  ];

  query: QueryParams = {
    search: '',
    tags: [],
  };

  copyBooks = [...this.bookCollections];
  copyShelves = [...this.shelfsCollections];
  BookSub = new BehaviorSubject(this.bookCollections);
  BookObs$: Observable<Book[]>;
  ShelvesSub = new BehaviorSubject(this.shelfsCollections);
  ShelvesObs$: Observable<Book[]>;

  constructor() {

    this.BookObs$ = this.BookSub.asObservable();
    this.ShelvesObs$ = this.ShelvesSub.asObservable();
  }

  changeQueryParams(queryParams: QueryParams): void {
    this.query = queryParams;
  }

  getBooks() {
    this.bookCollections = this.copyBooks.filter((book) => {
      const doesBookNameContainQuerySearchParam = book.name
        .toLowerCase()
        .includes(this.query.search.toLowerCase());
      const doesBookTagContainQueryTag = book.tags.some((tag) =>
        this.query.tags.includes(tag)
      );

      if (this.query.search && !doesBookNameContainQuerySearchParam) {
        return false;
      }
      if (this.query.tags.length !== 0 && !doesBookTagContainQueryTag) {
        return false;
      }
      return true;
    });
  }

  getBookById(id: number) {
    return this.bookCollections.find((book) => book.id === id);
  }

  getShelves() {
    // let shelves = [...this.shelfsCollections];

    this.shelfsCollections = this.copyShelves.filter((shelf) => {
      const doesShelfNameContainQuerySearchParam = shelf.name
        .toLowerCase()
        .includes(this.query.search.toLowerCase());
      const doesShelfTagContainQueryTag = shelf.tags.some((tag) =>
        this.query.tags.includes(tag)
      );

      if (this.query.search && !doesShelfNameContainQuerySearchParam) {
        return false;
      }
      if (this.query.tags.length !== 0 && !doesShelfTagContainQueryTag) {
        return false;
      }
      return true;
    });

    this.ShelvesSub.next(this.shelfsCollections)
    // return shelves;
  }

  getShelvesById(id: number) {
    return this.shelfsCollections.find((shelf) => shelf.id === id);
  }
  // updateCollectionList(dataType: DataTypes) {
  //   dataType === "books" ? 
  //         this.getBooks(this.bookCollections) : 
  //         this.getBooks(this.shelfsCollections)

  // }

  changeFavoriteShelf(isFavorite: boolean, index: number): void {
    this.shelfsCollections[index].favorite = isFavorite;
  }
  changeFavoriteBook(isFavorite: boolean, index: number): void {
    this.bookCollections[index].favorite = isFavorite;
  }

  deleteBook(id: number): void {
    const index = this.bookCollections.findIndex((book) => id === book.id);
    this.bookCollections.splice(index, 1);
  }
  deleteShelf(id: number): void {
    const index = this.shelfsCollections.findIndex((book) => id === book.id);
    this.shelfsCollections.splice(index, 1);
  }

  generateRandomPrice() {
    const min = 10;
    const max = 30;
    const price = Math.random() * (max - min) + min;
    return price.toFixed(2);
  }
}
