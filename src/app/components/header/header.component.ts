import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header implements OnInit {
    userName = "Superuser"

  constructor() {
  }

  ngOnInit(): void {}


}
