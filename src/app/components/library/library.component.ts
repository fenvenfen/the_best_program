import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/servises/tags.service';
import { Tag } from '../../interfaces';
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

  constructor(
    private tagsServece: TagsService,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.tags = this.tagsServece.tags;
  }

  receiveQuerySearch(querySearch: string) {
    this.querySearchParams = querySearch;
    // this.bookService.query.search = this.querySearchParams;
    // console.log("query", this.bookService.query.search);
    // this.bookService.getShelves();
    // console.log("shelves", this.bookService.shelfsCollections);
    // this.bookService.getBooks();
    // console.log("books", this.bookService.bookCollections);

  }
  receiveQueryTags(activeTags: number[]) {
    this.bookService.query.tags = [...activeTags];

    this.bookService.getShelves();
    this.bookService.getBooks();
  }
}
