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
    userName = "Superuser"

  constructor(
    private authServise: AuthenticationService,
    private router: Router,
    ) {  }

  ngOnInit(): void { 
    this.userName = JSON.parse(localStorage.getItem("CURRENT_USER")!).name
    // this.authServise.currentUser$?.subscribe(user => this.userName = user!.name)
   }

  LogOut(){
    this.authServise.logOut();
    this.router.navigate(["auth"])
  }


}
