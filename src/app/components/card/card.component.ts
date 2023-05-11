import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book, Tag } from "../../interfaces";
import { TagsService } from 'src/app/servises/tags.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  styles: [
    `
      .favorite::before {
        color: #8ac8e1;
      }
    `,
  ]
})
export class CardComponent implements OnInit {
  @Input() book?: Book;
  booksTags: Tag[] = [];
  isFavorite = this.book?.favorite; //чому тут доводиться повторювати?
  @Output() favoriteChange = new EventEmitter<boolean>();

  constructor(private tagsServece: TagsService) {  }

  ngOnInit(): void {
    this.booksTags = this.tagsServece.tags.filter(tag =>
      this.book?.tags.includes(tag.id) 
    );
    this.isFavorite = this.book?.favorite;
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.favoriteChange.emit(this.isFavorite);
  }
}
