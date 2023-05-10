import { Component, OnInit } from '@angular/core';
import { BooksService } from './shared/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  searchValue!: string
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
  }

  changeInput(inputValue: string): void {
    this.searchValue = inputValue
  }
}
