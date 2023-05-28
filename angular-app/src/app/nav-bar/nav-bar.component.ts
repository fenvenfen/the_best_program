import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { Subscription } from 'rxjs';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit, OnDestroy {
  @Input() shelvesOrBooks!: string;
  
  currentPage!: string;
  currentRouteUrlArray!: string[];
  // isShelvesOrBooks!: string;
  routeSub!: Subscription;

  constructor(private router: Router,
              private booksService: BooksService) { 
              }

  ngOnInit(): void {
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentRouteUrlArray = event.url.split('/').filter(n => {
          return n != '' && n != 'home' && n != 'unavailable?isAdult=false'
        });
        this.getCurrentPage();
        // this.isShelvesOrBooks = this.currentRouteUrlArray[this.currentRouteUrlArray.length - 2];
      }
    }) 
  }

  ngOnDestroy(): void {
    if (this.routeSub) this.routeSub.unsubscribe();
  }

  getCurrentPage(): void {
    if (this.currentRouteUrlArray.length) {
      this.currentPage = this.currentRouteUrlArray[this.currentRouteUrlArray.length - 1];
    } else this.currentPage = 'Home';
  }

  getClickedRoute(route: string) {
    const indexOfRoute = this.currentRouteUrlArray.indexOf(route);
    const neededRouterLinkArray = this.currentRouteUrlArray.slice(0, indexOfRoute + 1);
    return `/${neededRouterLinkArray.join('/')}`; 
  }

  // changeBookIdIntoNameInRouteUrl(): string[] {
  //   return this.currentRouteUrlArrayWithId.map((route, index) => {
  //     if (this.currentPage === route && Number.isFinite(+route)) {

  //       let shelvesOrBooks = this.currentRouteUrlArrayWithId[index - 1];

  //       if (shelvesOrBooks === 'shelves') {
  //         let book = this.booksService.getBookById('shelves', +route);
  //         this.currentPage = book.name;
  //         return route = book.name;

  //       } else {
  //         let book = this.booksService.getBookById('books', +route);
  //         this.currentPage = book.name;
  //         return route = book.name;
  //       }
  //     } else return route;
  //   })
  // }
}
