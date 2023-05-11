import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/servises/books.service';
import { Book } from '../../interfaces';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  styles: [
    `
      .favorite::after {
        color: #8ac8e1;
      }
    `,
  ],
  providers: [BookService],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  shouldFavoriteBooksBeShown: boolean = false;
  constructor(private bookService: BookService){}
  ngOnInit(): void {
    this.books = this.bookService.bookCollections;
  }
  onChangeBookfFavorites(isFavorite: boolean, index: number){
    //here go to all array and change this value!
    //BUT STILL NOT SAVE AFTER RELOAD PAGE
    this.bookService.changeFavoriteBook(isFavorite, index)
  }
  toggleShowFavoriteBooks(): void {
    this.shouldFavoriteBooksBeShown = !this.shouldFavoriteBooksBeShown;
    this.books = this.shouldFavoriteBooksBeShown ?
    this.bookService.bookCollections.filter(book => book.favorite) :
    this.bookService.bookCollections;
  }
}
