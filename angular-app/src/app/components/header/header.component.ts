import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isLogged!: boolean;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.isLogged$.subscribe(isLogged => this.isLogged = isLogged)
  }

}
