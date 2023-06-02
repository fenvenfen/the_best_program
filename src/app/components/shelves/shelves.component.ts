import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/servises/books.service';
import { Shelf } from "../../interfaces"

@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.css'],
  styles: [
    `
      .favorite::after {
        color: #8ac8e1;
      }
      .hidden {
        max-height: 450px;
        overflow: hidden;
        gap: 0 30px;
      }
    `,
  ],
  providers: [BookService],
})
export class ShelvesComponent implements OnInit {
  shelves: Shelf[] = [];

  shouldFavoriteShelvesBeShown: boolean = false;
  showMore: boolean = false;
    
  constructor(
    private bookService: BookService){ }

  ngOnInit(): void { 

    this.shelves = this.bookService.shelfsCollections;

  }

  onChangeShelfFavorites(isFavorite: boolean, index: number){
    this.bookService.changeFavoriteShelf(isFavorite, index)
    this.bookService.getShelves()
  }
  toggleShowFavoriteShelves(): void {
    this.shouldFavoriteShelvesBeShown = !this.shouldFavoriteShelvesBeShown;
  }
  deletingShelf(id: number){
    this.bookService.deleteShelf(id);
    this.bookService.getShelves()
  }
  showMoreToggler(){
    this.showMore = !this.showMore;
  }
}
