import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { BookService } from 'src/app/servises/books.service';
import { Book } from "../../interfaces"

@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.css'],
  providers: [BookService],
})
export class ShelvesComponent implements OnInit {

  shouldFavoriteShelvesBeShown: boolean = false;
  showMore: boolean = false;
  
  @Input() shelves?: Book[];
  
  constructor(public bookService: BookService){ }

  ngOnInit(): void { }

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
