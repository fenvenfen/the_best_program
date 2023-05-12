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
  shouldFavoriteShelvesBeShown: boolean = false;
  showMore: boolean = false;
  
  @Input() shelves?: Shelf[];
  
  constructor(private bookService: BookService){ }

  ngOnInit(): void { }

  onChangeShelfFavorites(isFavorite: boolean, index: number){
    this.bookService.changeFavoriteShelf(isFavorite, index)
    this.shelves = this.bookService.getShelves()
  }
  toggleShowFavoriteShelves(): void {
    this.shouldFavoriteShelvesBeShown = !this.shouldFavoriteShelvesBeShown;
  }
  deletingShelf(id: number){
    this.bookService.deleteShelf(id);
    this.shelves = this.bookService.getShelves()
  }
  showMoreToggler(){
    this.showMore = !this.showMore;
  }
}
