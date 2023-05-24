import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit, OnDestroy {
  currentPage!: string;
  currentRouteUrlArray!: string[];
  routeSub!: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentRouteUrlArray = event.url.split('/').filter(n => n != '');
        this.getCurrentPage();
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
}
