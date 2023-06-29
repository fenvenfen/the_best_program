import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  currentRoute!: string[];
  lastRoute!: string;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.currentRoute = this.route.snapshot.url.map(url => url.path);
    this.lastRoute = this.currentRoute[this.currentRoute.length - 1];
  }
}

