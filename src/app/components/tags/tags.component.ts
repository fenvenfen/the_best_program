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
    console.log(this.isTagsOpened);
    this.isTagsOpened = !this.isTagsOpened;
  }
  
}
