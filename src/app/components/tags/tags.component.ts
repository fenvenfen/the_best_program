import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { TagsService } from 'src/app/tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  styles: [
    `
      .opened {
        transform: rotate(180deg);
      }
      .closed {
        transform: rotate(0deg);
      }
      .hidden {
        overflow: hidden;
        height: 36px;
      }
    `,
  ],
  providers: [TagsService],
})
export class TagsComponent implements AfterViewInit {
  tags: { name: String }[] = [];
  isTagsOpened = false;

  @ViewChild('taglist') taglist!: ElementRef;

  constructor(private tagsServece: TagsService) {
    this.taglist = {} as ElementRef;
  }

  ngOnInit(): void {
    this.tags = this.tagsServece.tags;
  }

  ngAfterViewInit(): void {
    const tagsListChildren = [...this.taglist.nativeElement.childNodes];
    const parentTagsWidth = this.taglist.nativeElement.offsetWidth;
    this.checkTagsEnoughToOpenTaglist(tagsListChildren, parentTagsWidth)
  }

  checkTagsEnoughToOpenTaglist(tagsListChildren: { offsetWidth: number}[], parentTagsWidth: number){
    const tagsWidth: number = tagsListChildren.reduce((commonWidth: number, tag) => {
      const tagListGap = 4;
      const { offsetWidth } = tag;
      if(offsetWidth) {
        commonWidth = commonWidth + offsetWidth + tagListGap;
        }
        return commonWidth;
    }, 0);
    this.isTagsOpened = parentTagsWidth > tagsWidth
  }

  toggleIsOpen() {
    this.isTagsOpened = !this.isTagsOpened;
  }
}
