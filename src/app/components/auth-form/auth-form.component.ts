import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { Credentials, User } from 'src/app/interfaces';
import { AuthenticationService } from 'src/app/servises/authentication.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  providers: [AuthenticationService],
})
export class AuthFormComponent implements OnInit {
  authForm!: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
    });
  }

  submitForm() {
    // console.log(this.authForm);
    if (!this.authForm.valid) {
      return;
    }

    const user$ = this.authService.login(this.authForm.value);

    user$.subscribe((user) => {
        if (typeof user === 'string') {
          alert(user);
        } else {
          this.authService.setCurrentUser(user);
          this.authService.setToken(user.token);
          this.redirectUserToHisPage(user)
        }
      },
    );
    // this.authService.login(this.authForm.value);
  }
  redirectUserToHisPage(user: User) {

    if (user.admin) {
      this.router.navigate(["admin"]);
    } else if (!user.admin) {
      this.router.navigate(["library"]);
    } else {
      this.router.navigate(["auth"]);
    }
  }
}
