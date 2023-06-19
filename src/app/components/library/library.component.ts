import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/servises/tags.service';
import { Tag, Book } from '../../interfaces';
import { BookService } from 'src/app/servises/books.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  providers: [TagsService, BookService],
})
export class LibraryComponent implements OnInit {
  tags: Tag[] = [];
  querySearchParams?: string;
  activeTags?: number[];
  shelves: Book[] = [];
  books: Book[] = [];


  constructor(
    private tagsServece: TagsService,
    public bookService: BookService
  ) {}

  ngOnInit(): void {
    this.tags = this.tagsServece.tags;
    // this.shelves = this.bookService.shelfsCollections;
    this.books = this.bookService.bookCollections;
  }

  receiveQuerySearch(querySearch: string) {
    this.bookService.query.search = querySearch;
    this.bookService.getShelves();
    this.bookService.getBooks();
  }
  receiveQueryTags(activeTags: number[]) {
    this.bookService.query.tags = [...activeTags];

    this.bookService.getShelves();
    this.bookService.getBooks();
  }
}
