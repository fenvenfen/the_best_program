import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';
import { Book } from '../shared/interfaces';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  @ViewChild('tagsContainerTpl')
  _tagsContainerTpl!: ElementRef<any>;

  @ViewChildren('tags')
  _tags!: QueryList<ElementRef>;

  @ViewChild('bookContainer')
  bookContainer!: ElementRef<any>;

  @Input() book!: Book;

  @Output() onFavorite: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDeleteBook: EventEmitter<number> = new EventEmitter<number>()

  shelfTagsIds!: number[]; 
  shelfTagsNames!: string[];

  isTagsInMultiRow!: boolean;
  isTagsClosed = true;
  tagsWidth = 0;
  tagsContainerWidth!: number;
  tagsNumber!: number;
  price: number = this.booksService.genereteRandomPrice();
  bookDescription: string = 'Lorem ipsum dolor sit amet cons adipisicing elit. Recusandae, nobis!'

  constructor(private readonly dataStorageService: DataStorageService,
              private readonly booksService: BooksService,
              private readonly _changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.shelfTagsIds = this.book.tags;
    this.shelfTagsNames = this.getTagsNamesByIds(this.shelfTagsIds);
  }

  ngAfterViewInit(): void {
    this.getAllTagsWidth();
    this.tagsContainerWidth = this._tagsContainerTpl.nativeElement.offsetWidth;
    this.isTagsInMultiRow = this.tagsContainerWidth < (this.tagsWidth);
    this.tagsNumber = this._tags.length;
    this._changeDetectorRef.detectChanges();
  }

  getTagsNamesByIds(idArray: number[]) :string[] {
    const neededTagsNames = this.dataStorageService.tags.reduce((acc: any, curr: any) => {
      if (idArray.includes(curr.id)) acc.push(curr.name);
      return acc
    }, [])
    
    return neededTagsNames;
  }

  getAllTagsWidth(): void {
    this._tags.forEach((tag) => this.tagsWidth += tag.nativeElement.offsetWidth);
  }

  makeFavorite() {
    this.onFavorite.emit(this.book.id)
  }

  deleteBook() {
    this.onDeleteBook.emit(this.book.id)
  }

}
