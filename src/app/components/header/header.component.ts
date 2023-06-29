import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servises/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService],
})
export class HeaderComponent implements OnInit {
  userName = "Superuser";

  constructor( private authServise: AuthenticationService, private router: Router) {  }

  ngOnInit(): void { 
    this.userName = this.authServise.getCurrentUser().name
  }

  LogOut(): void {
    this.authServise.logOut();
    this.router.navigate(["auth"])
  }
}
