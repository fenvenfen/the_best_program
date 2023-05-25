import { Component, OnInit, OnChanges } from '@angular/core';
import { TagsService } from 'src/app/servises/tags.service';
import { Tag, Shelf, Book } from "../app/interfaces";
import { BookService } from './servises/books.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TagsService, BookService],

})
export class AppComponent implements OnInit {
  title = 'the_best_program';

  constructor(
    ) {
  }

  ngOnInit() {
  }
  
}
