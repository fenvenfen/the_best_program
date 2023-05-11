import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BookService } from 'src/app/servises/books.service';
import { Book } from '../../interfaces';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  styles: [
    `
      .favorite::after {
        color: #8ac8e1;
      }
    `,
  ],
  providers: [BookService],
})
export class BooksComponent implements OnInit {
  shouldFavoriteBooksBeShown: boolean = false;
  @Input() books?: Book[];
  favoriteBooks = this.books?.filter(book => book.favorite)

  constructor(private bookService: BookService){}
  ngOnInit(): void { }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("changes", changes);
  //   if (changes.books.currentValue.length !== changes.books.previousValue.length && !changes.books.firstChange) {
  //     console.log("Im changed");
  //   }
  //   // changes.prop contains the old and the new value...
  // }

  onChangeBookfFavorites(isFavorite: boolean, index: number){
    //here go to all array and change this value!
    //BUT STILL NOT SAVE AFTER RELOAD PAGE
    this.bookService.changeFavoriteBook(isFavorite, index)
  }
  toggleShowFavoriteBooks(): void {
    this.shouldFavoriteBooksBeShown = !this.shouldFavoriteBooksBeShown;
  }
  deletingBook(id: number){
    this.bookService.deleteBook(id);
    console.log(this.bookService.bookCollections);
  }
}
