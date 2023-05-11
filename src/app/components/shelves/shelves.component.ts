import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/servises/books.service';
import { Shelf } from "../../interfaces"

@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.css'],
  providers: [BookService],
})
export class ShelvesComponent implements OnInit {
  shelves: Shelf[] = [];

  constructor(private bookService: BookService){ }

  ngOnInit(): void {
    this.shelves = this.bookService.shelfsCollections
  }

}
