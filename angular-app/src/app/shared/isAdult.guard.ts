import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "./services/data-storage.service";
import { IsBookAvailableService } from "./services/isBookAvailable.service";

@Injectable({providedIn: 'root'})
export class IsAdultGuard implements CanActivate{

    constructor(private isBookAvailable: IsBookAvailableService,
                private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        if (this.isBookAvailable.isBookForAdults) {
            this.router.navigate(['/library/unavailable'], {
                queryParams: {
                    isAdult: false
                }
            });
            return false;
        } else {
            return true;
        }
    }

}