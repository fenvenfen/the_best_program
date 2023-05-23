import { Component, OnInit } from '@angular/core';
import { BooksService } from './shared/services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor( ) {}

  ngOnInit(): void {
  }

}
