import { Component, OnInit, Input } from '@angular/core';
import { Book, Tag } from "../../interfaces";
import { TagsService } from 'src/app/servises/tags.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() book?: Book;
  booksTags: Tag[] = [];

  constructor(private tagsServece: TagsService) {  }

  ngOnInit(): void {
    console.log(this.book?.tags);
    this.booksTags = this.tagsServece.tags.filter(tag =>
      this.book?.tags.includes(tag.id) 
    );
    console.log(this.booksTags);
  }

}
