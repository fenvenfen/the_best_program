import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';
import { Tag } from "../../interfaces";

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
})
export class TagsComponent implements AfterViewInit {
  @Input() tags?: Tag[] = [];

  isTagsOpened = false;

  @ViewChild('taglist') taglist!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const tagsListChildren = [...this.taglist.nativeElement.childNodes];
    const parentTagsWidth = this.taglist.nativeElement.offsetWidth;
    this.checkTagsEnoughToOpenTaglist(tagsListChildren, parentTagsWidth)
  }

  checkTagsEnoughToOpenTaglist(tagsListChildren: { offsetWidth: number}[], parentTagsWidth: number){
    const tagsWidth: number = tagsListChildren.reduce((commonWidth, tag) => {
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
