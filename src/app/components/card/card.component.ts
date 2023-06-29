import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book, Tag } from "../../interfaces/interfaces";
import { TagsService } from 'src/app/servises/tags.service';
import { BookService } from 'src/app/servises/books.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() book!: Book;
  
  booksTags: Tag[] = [];
  isFavorite: boolean = this.book?.favorite; 
  price: string = this.bookService.generateRandomPrice();
  howManyTagsBookHas!: number;
  
  @Output() favoriteChange = new EventEmitter<boolean>();
  @Output() deleteBookbyId = new EventEmitter<number>();

  constructor(private tagsServece: TagsService, private bookService: BookService) {  }

  ngOnInit(): void {
    this.booksTags = this.tagsServece.tags.filter(tag =>
      this.book.tags.includes(tag.id) 
    );
    this.isFavorite = this.book?.favorite;
    this.howManyTagsBookHas = this.book.tags.length;
  }

  toggleFavorite(event: any): void {
    event.stopPropagation(); // Prevent event bubbling
    this.isFavorite = !this.isFavorite;
    this.favoriteChange.emit(this.isFavorite);
  }

  deleteBook(id: number): void{
    this.deleteBookbyId.emit(id);
  }
}
