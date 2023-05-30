import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { BooksService } from "./services/books.service";

@Injectable({providedIn: 'root'})
export class IsAdultGuard implements CanActivate{

    constructor(private router: Router,
                private booksService: BooksService) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): boolean {

        const bookId = state.url.split('/').pop();
        const isShelvesOrBooks = route.routeConfig?.data?.['isBooskOrShelves'];
        const book = this.booksService.getBookById(isShelvesOrBooks, Number(bookId));
        const isForAdults = book.forAdults;
        
        if (isForAdults) {
            this.router.navigate(['/library/unavailable']);
            return false;
        } else {
            return true;
        }
    }

}