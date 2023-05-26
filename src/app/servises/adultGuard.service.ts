import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChildFn, Router } from '@angular/router';
import { BookService } from './books.service';

@Injectable({
  providedIn: 'root',
})
export class AdultGuardService implements CanActivate {

  constructor( 
    private router: Router,
    private route: ActivatedRouteSnapshot,
    private routerStateSnapshot: RouterStateSnapshot,
    private bookService: BookService,
    ) {}
  canActivate(): boolean {
    // const currentRoute = this.router.routerState.snapshot.url.map(url => url.path);
    // const lastRoute = this.currentRoute[this.currentRoute.length - 1];
    // const currentBook = this.bookService.getBookById(id);
    // console.log(this.router.routerState.snapshot.url);
    // const id = this.activatedRoute.snapshot.params.name;
    
    // const qqq = this.route.snapshot.url.map(url => url.path)
    // console.log(qqq);

    // Ваш код перевірки 
    if (true) {
      return true;
    } else {
      this.router.navigate(['/library/forbidden']);
      return false;
    }
  }

}

