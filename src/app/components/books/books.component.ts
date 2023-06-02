import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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

  // favoriteBooks = this.books?.filter(book => book.favorite)

  constructor(
    private bookService: BookService,
    private router: Router){}

  ngOnInit(): void { 
    this.books = this.bookService.bookCollections;
  }

  onChangeBookfFavorites(isFavorite: boolean, index: number){
    this.bookService.changeFavoriteBook(isFavorite, index)
    this.bookService.getBooks()
  }
  toggleShowFavoriteBooks(): void {
    this.shouldFavoriteBooksBeShown = !this.shouldFavoriteBooksBeShown;
  }
  deletingBook(id: number){
    this.bookService.deleteBook(id);
    this.bookService.getBooks()
  }
  openBookDetails(id: number){
    this.router.navigate([`library/books/${id}`]);
  }
}
