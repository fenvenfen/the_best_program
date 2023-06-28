import { Component, OnInit  } from '@angular/core';
import { AuthenticationService } from 'src/app/servises/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService],
})
export class HeaderComponent implements OnInit {
    userName = "Superuser"

  constructor(private authServise: AuthenticationService) {
    
  }

  ngOnInit(): void {

  }


}
