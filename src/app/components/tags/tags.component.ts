import { Component } from '@angular/core';
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
  
  constructor(private tagsServece: TagsService) {
  }
  
  ngOnInit(): void {
    this.tags = this.tagsServece.tags;
  }

  toggleIsOpen() {
    this.isTagsOpened = !this.isTagsOpened;
  }
  
}
