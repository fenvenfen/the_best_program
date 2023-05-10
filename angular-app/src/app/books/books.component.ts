import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Book } from '../shared/interfaces';
import { DataStorageService } from '../shared/data-storage.service';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {
  books!: Book[];
  book: any;
  bookHeight!: number;
  bookMargin!: number;
  booksContainerHeight!: number;
  isBooksInMultipleRow!: boolean;

  buttonText = 'SHOW MORE';

  @ViewChild('booksContainer')
  booksContainer!: ElementRef<any>;

  constructor(private readonly booksService: BooksService,
              private readonly _changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.books = this.booksService.books;
  }

  ngAfterViewInit(): void {
    this.booksContainerHeight = this.booksContainer.nativeElement.offsetHeight;
    this.book = document.getElementById("book");
    this.bookMargin = parseFloat(window.getComputedStyle(this.book).marginBottom);
    this.bookHeight = Math.ceil(parseFloat(window.getComputedStyle(this.book).height)) +  this.bookMargin;
    this.isBooksInMultipleRow = this.booksContainerHeight > this.bookHeight;
    this._changeDetectorRef.detectChanges();
  }

  openOrCloseBooks() : void {
    (this.isBooksInMultipleRow) ? this.buttonText = 'SHOW LESS' : this.buttonText = 'SHOW MORE';
    this.isBooksInMultipleRow = !this.isBooksInMultipleRow;
  }


}
