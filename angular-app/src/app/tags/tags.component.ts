import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {
  public readonly tags = this.dataStorageService.tags;
  public isTagsInMultiRow!: boolean;
  public isTagsClosed = true;
  
  private _tagsWidth = 0;
  private _tagsContainerWidth!: number;

  @ViewChild('tagsContainerTpl')
  private _tagsContainerTpl!: ElementRef<any>;

  @ViewChildren('tags')
  private _tags!: QueryList<ElementRef>;
  
  constructor(
    public readonly dataStorageService: DataStorageService,
    private readonly _changeDetectorRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.getAllTagsWidth();
    this._tagsContainerWidth = this._tagsContainerTpl.nativeElement.offsetWidth;
    this.isTagsInMultiRow = this._tagsContainerWidth < (this._tagsWidth);
    this._changeDetectorRef.detectChanges();
  }
 
  public getAllTagsWidth(): void {
    this._tags.forEach((tag) => this._tagsWidth += tag.nativeElement.offsetWidth)
  }
}