import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  shouldFavoriteBooksBeShown: boolean = false;
  @Input() books?: Book[];

  // favoriteBooks = this.books?.filter(book => book.favorite)

  constructor(private bookService: BookService){}

  ngOnInit(): void { }

  onChangeBookfFavorites(isFavorite: boolean, index: number){
    this.bookService.changeFavoriteBook(isFavorite, index)
    this.books = this.bookService.getBooks()
  }
  toggleShowFavoriteBooks(): void {
    this.shouldFavoriteBooksBeShown = !this.shouldFavoriteBooksBeShown;
  }
  deletingBook(id: number){
    this.bookService.deleteBook(id);
    this.books = this.bookService.getBooks()
  }
}
