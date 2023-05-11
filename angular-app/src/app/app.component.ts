import { Component, OnInit } from '@angular/core';
import { BooksService } from './shared/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  searchValue!: string;
  chosenTags!: number[];
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
  }

  updateInputValue(inputValue: string): void {
    this.searchValue = inputValue
  }

  updateTagsValue(chosenTags: number[]) {
   this.chosenTags = chosenTags;
  }
}
