import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/interfaces';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.sass']
})
export class DetailBookComponent implements OnInit {
  @Output() booksOrShelves: EventEmitter<string> = new EventEmitter<string>();
  shelvesOrBooks!: any;
  book!: Book;
  bookTags!: string[];

  constructor(private route: ActivatedRoute,
              private booksService: BooksService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.shelvesOrBooks = this.route.snapshot.url[1].path;
      this.book = this.booksService.getBookById(this.shelvesOrBooks, +params['id'])
    });
    this.bookTags = this.booksService.getTagsNamesByIds(this.book.tags);

    this.shelvesOrBooks = this.route.snapshot.data['isBooskOrShelves'];
    this.booksOrShelves.emit(this.shelvesOrBooks);
  }
}
