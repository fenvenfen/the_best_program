import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { TagsService } from 'src/app/tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  styles: [`
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
  `],
  providers: [TagsService]
})
export class TagsComponent {
  tags: {name: String}[] = [];
  isTagsOpened = false;

  @ViewChild('taglist') taglist: ElementRef<any>;
  
  constructor(private tagsServece: TagsService) {
    this.taglist = {} as ElementRef;
  }
  
  ngOnInit(): void {
    this.tags = this.tagsServece.tags;
  }
  
  ngAfterViewInit(): void {
    const tagsList = [...this.taglist.nativeElement.childNodes];
    let commonWidth = 0;
    const tagListGap = 4;
    tagsList.forEach(e => {
      if(e.offsetWidth) {
        commonWidth = commonWidth + e.offsetWidth + tagListGap;
        }
      })
      if(this.taglist.nativeElement.offsetWidth > commonWidth) {
        this.isTagsOpened = true
      }
  }

  toggleIsOpen() {
    this.isTagsOpened = !this.isTagsOpened;
  }
  
}
