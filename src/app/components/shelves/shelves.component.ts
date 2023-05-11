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
    `,
  ],
  providers: [BookService],
})
export class ShelvesComponent implements OnInit {
  // shelves: Shelf[] = [];
  shouldFavoriteShelvesBeShown: boolean = false;
  @Input() shelves?: Shelf[];

  constructor(private bookService: BookService){ }

  ngOnInit(): void {
    // this.shelves = this.bookService.shelfsCollections;
  }
  onChangeShelfFavorites(isFavorite: boolean, index: number){
    //here go to all array and change this value!
    //BUT STILL NOT SAVE AFTER RELOAD PAGE
    this.bookService.changeFavoriteShelf(isFavorite, index)
  }
  toggleShowFavoriteShelves(): void {
    this.shouldFavoriteShelvesBeShown = !this.shouldFavoriteShelvesBeShown;
    let filtredShelvesByFavorite: Shelf[] = JSON.parse(JSON.stringify(this.shelves));

    this.shelves = this.shouldFavoriteShelvesBeShown ?
    filtredShelvesByFavorite.filter(shelf => shelf.favorite) :
    filtredShelvesByFavorite;
  }

}
