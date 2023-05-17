import { Component, OnInit, OnChanges } from '@angular/core';
import { TagsService } from 'src/app/servises/tags.service';
import { QueryParams, Tag, Shelf, Book } from "../app/interfaces";
import { BookService } from './servises/books.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TagsService, BookService],

})
export class AppComponent implements OnInit {
  title = 'the_best_program';
  tags: Tag[] = [];
  shelves: Shelf[] = [];
  books: Book[] = [];

  constructor(
    private tagsServece: TagsService, 
    private bookService: BookService,
    ) {
  }

  ngOnInit() {
    this.tags = this.tagsServece.tags;
    this.shelves = this.bookService.shelfsCollections;
    this.books = this.bookService.bookCollections;
  }
  

  receiveQuerySearch(querySearch: string) {
    this.bookService.query.search = querySearch;
    this.shelves = this.bookService.getShelves();
    this.books = this.bookService.getBooks();

  }
  receiveQueryTags(activeTags: number[]) {
    this.bookService.query.tags = [...activeTags];
    
    this.shelves = this.bookService.getShelves();
    this.books = this.bookService.getBooks();

  }

}
