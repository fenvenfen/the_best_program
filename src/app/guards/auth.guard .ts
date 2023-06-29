import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../servises/authentication.service'; 

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  token?: string | null;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = this.authService.getToken();
    // const triggeredBookId = Number(route.params["id"]);
    // const currentBook = this.bookService.getBookById(triggeredBookId);

    if (token) {
      // console.log(this.authService.token$);
      return true;
    } else {
      this.router.navigate(['auth']);
      return false;
    }
  }
}
