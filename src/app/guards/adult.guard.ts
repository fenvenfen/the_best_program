import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { BookService } from '../servises/books.service';

@Injectable({
  providedIn: 'root',
})
export class AdultGuardService {
  constructor(
    private router: Router,
    private bookService: BookService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const triggeredBookId = Number(route.params["id"]);
    const currentBook = this.bookService.getBookById(triggeredBookId);

    if (!currentBook?.forAdults) {
      return true;
    } else {
      this.router.navigate(['/library/forbidden']);
      return false;
    }
  }
}
