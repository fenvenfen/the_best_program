import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Book } from '../shared/interfaces';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  shelfsCollections!: Book[];
  shelfOne!: Book;
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
  
  constructor(private readonly dataStorageService: DataStorageService,
              private readonly _changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.shelfsCollections = this.dataStorageService.shelfsCollections;
    this.shelfOne = this.shelfsCollections[0];
    this.shelfTagsIds = this.shelfOne.tags;
    this.shelfTagsNames = this.getTagsNamesByIds(this.shelfTagsIds);
    console.log(this.shelfTagsNames)
  }

  ngAfterViewInit(): void {
    this.getAllTagsWidth();
    this.tagsContainerWidth = this._tagsContainerTpl.nativeElement.offsetWidth;
    this.isTagsInMultiRow = this.tagsContainerWidth < (this.tagsWidth);
    this._changeDetectorRef.detectChanges();
  }

  getTagsNamesByIds(idArray: number[]) :string[] {
    const neededTagsNames = this.dataStorageService.tags.reduce((acc: any, curr: any) => {
      if (idArray.includes(curr.id)) acc.push(curr.name);
      return acc
    }, [])
    
    return neededTagsNames
  }

  getAllTagsWidth(): void {
    this._tags.forEach((tag) => this.tagsWidth += tag.nativeElement.offsetWidth)
  }

}
