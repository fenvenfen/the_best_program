import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Book } from '../shared/interfaces';
import { BooksService } from '../shared/services/books.service';
import { IsBookAvailableService } from '../shared/services/isBookAvailable.service';

@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.sass']
})
export class ShelvesComponent implements OnInit {
  @Input() searchValue!: string;
  @Input() chosenTagsArray!: number[];

  shelves!: Book[];
  shelvesCopy!: Book[]; //put in service
  shelf: any;
  shelfHeight!: number;
  shelfMargin!: number;
  shelvesContainerHeight!: number;
  isShelvesInMultipleRow!: boolean;
  isOnlyFavorite: boolean = false;

  buttonText = 'SHOW MORE';

  @ViewChild('shelvesContainer')
  shelvesContainer!: ElementRef<any>;

  constructor(public booksService: BooksService,
              private readonly _changeDetectorRef: ChangeDetectorRef,
              public isBookAvailableService: IsBookAvailableService) { }

  ngOnInit(): void {
    this.shelves = this.booksService.shelves;
    this.shelvesCopy = [...this.shelves];  //put in service
  }

  ngAfterViewInit(): void {
    this.shelvesContainerHeight = this.shelvesContainer.nativeElement.offsetHeight;
    this.shelf = document.getElementById("shelf"); //check if is
    this.shelfMargin = parseFloat(window.getComputedStyle(this.shelf).marginBottom);
    this.shelfHeight = Math.ceil(parseFloat(window.getComputedStyle(this.shelf).height)) +  this.shelfMargin;
    this.isShelvesInMultipleRow = this.shelvesContainerHeight > this.shelfHeight;
    this._changeDetectorRef.detectChanges();
  }

  openOrCloseBooks() : void {
    (this.isShelvesInMultipleRow) ? this.buttonText = 'SHOW LESS' : this.buttonText = 'SHOW MORE';
    this.isShelvesInMultipleRow = !this.isShelvesInMultipleRow;
  }  //not ngClass - slice array in service. if 4 fit the row

  showFavorites() {
    this.isOnlyFavorite = !this.isOnlyFavorite;
    let favoriteBooksArray = this.shelvesCopy.filter((book) => {return book.favorite === true});
    (this.isOnlyFavorite) ? this.shelves = favoriteBooksArray : this.shelves = this.shelvesCopy;
  }
}
