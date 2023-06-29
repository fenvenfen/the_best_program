import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/servises/books.service';
import { Book } from '../../interfaces/interfaces';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService],
})
export class BooksComponent implements OnInit {

  shouldFavoriteBooksBeShown: boolean = false;
  
  @Input() books!: Book[];

  constructor(private bookService: BookService, private router: Router){}

  ngOnInit(): void {}
  
  onChangeBookfFavorites(isFavorite: boolean, index: number): void {
    this.bookService.changeFavoriteBook(isFavorite, index)
    this.bookService.updateCollectionList("books")
  }
  toggleShowFavoriteBooks(): void {
    this.shouldFavoriteBooksBeShown = !this.shouldFavoriteBooksBeShown;
  }
  deletingBook(id: number): void {
    this.bookService.deleteBook(id);
    this.bookService.updateCollectionList("books")
  }
  openBookDetails(id: number): void {
    this.router.navigate([`library/books/${id}`]);
  }
}
