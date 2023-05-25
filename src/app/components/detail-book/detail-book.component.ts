import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from "../../interfaces";
import { BookService } from 'src/app/servises/books.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  isBooskOrShelves!: string
  id!: number;
  book?: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
    ) {}
    
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; // Отримання значення параметра 'id'
      this.id = Number(id);

      this.isBooskOrShelves = this.route.snapshot.data["isBooskOrShelves"];
      switch (this.isBooskOrShelves) {
        case "books":
          this.book = this.bookService.getBookById(this.id)
          break;
          case "shelves":
            this.book = this.bookService.getShelvesById(this.id)
          break;
        default:
          break;
      }
  });


  // this.book = this.bookService.getBookById(this.id)
  }
  
}
