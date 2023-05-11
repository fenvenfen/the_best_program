import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/servises/books.service';
import { Book } from '../../interfaces';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService],

})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService){}
  ngOnInit(): void {
    this.books = this.bookService.bookCollections;
  }
}
