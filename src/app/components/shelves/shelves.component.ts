import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { BookService } from 'src/app/servises/books.service';
import { Book } from "../../interfaces/interfaces";
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.css'],
  providers: [BookService],
})
export class ShelvesComponent implements OnInit {

  shouldFavoriteShelvesBeShown: boolean = false;
  showMore: boolean = false;
  
  @Input() shelves!: Book[];
  @Input() JOObs!: Observable<any>;
  mySubscribtiontoBtn!: Subscription;
  message: string = "...";

  constructor(public bookService: BookService){ }

  ngOnInit(): void {
    this.mySubscribtiontoBtn = this.JOObs.subscribe({ 
      next: value => this.message = value.target.innerText + " Dear User"
    });
  }
  ngOnDestroy() {
    this.mySubscribtiontoBtn.unsubscribe();
  }

  onChangeShelfFavorites(isFavorite: boolean, index: number){
    this.bookService.changeFavoriteShelf(isFavorite, index)
    this.bookService.updateCollectionList("shelves")
  }
  toggleShowFavoriteShelves(): void {
    this.shouldFavoriteShelvesBeShown = !this.shouldFavoriteShelvesBeShown;
  }
  deletingShelf(id: number){
    this.bookService.deleteShelf(id);
    this.bookService.updateCollectionList("shelves")
  }
  showMoreToggler(){
    this.showMore = !this.showMore;
  }
}



