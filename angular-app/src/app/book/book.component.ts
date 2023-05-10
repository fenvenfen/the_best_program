import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Book } from '../shared/interfaces';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  shelfTagsIds!: number[]; 
  shelfTagsNames!: string[];

  isTagsInMultiRow!: boolean;
  isTagsClosed = true;
  tagsWidth = 0;
  tagsContainerWidth!: number;

  @ViewChild('tagsContainerTpl')
  _tagsContainerTpl!: ElementRef<any>;

  @ViewChildren('tags')
  _tags!: QueryList<ElementRef>;

  @ViewChild('bookContainer')
  bookContainer!: ElementRef<any>;
  // @Input() bookContainerHeights: any;
  @Input() book!: Book;

  constructor(private readonly dataStorageService: DataStorageService,
              private readonly _changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.shelfTagsIds = this.book.tags;
    this.shelfTagsNames = this.getTagsNamesByIds(this.shelfTagsIds);
  }

  ngAfterViewInit(): void {
    this.getAllTagsWidth();
    this.tagsContainerWidth = this._tagsContainerTpl.nativeElement.offsetWidth;
    this.isTagsInMultiRow = this.tagsContainerWidth < (this.tagsWidth);
    this._changeDetectorRef.detectChanges();
    // this.bookContainerHeights = this.bookContainer.nativeElement.offsetHeight;
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

}
