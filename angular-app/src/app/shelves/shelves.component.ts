import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Book } from '../shared/interfaces';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.sass']
})
export class ShelvesComponent implements OnInit {
  books!: Book[];
  book: any;
  bookHeight!: number;
  bookMargin!: number;
  booksContainerHeight!: number;
  isBooksInMultipleRow!: boolean;

  buttonText = 'SHOW MORE';

  @ViewChild('booksContainer')
  booksContainer!: ElementRef<any>;

  constructor(private readonly dataStoregeService: DataStorageService,
              private readonly _changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.books = this.dataStoregeService.shelfsCollections;
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
