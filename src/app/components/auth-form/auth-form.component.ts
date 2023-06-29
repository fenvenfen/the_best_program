import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { AuthenticationService } from 'src/app/servises/authentication.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  providers: [AuthenticationService],
})
export class AuthFormComponent implements OnInit {
  authForm!: FormGroup;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submitForm(): void {
    if (!this.authForm.valid) { return }

    const user$ = this.authService.login(this.authForm.value);

    user$.subscribe((user: User | string) => {
        if (typeof user === 'string') {
          alert(user);
        } else {
          this.authService.setCurrentUser(user);
          this.authService.setToken(user.token);
          this.redirectUserToHisPage(user)
        }
      },
    );
  }

  redirectUserToHisPage(user: User): void {
    if (user.admin) {
      this.router.navigate(["admin"]);
    } else if (!user.admin) {
      this.router.navigate(["library"]);
    } else {
      this.router.navigate(["auth"]);
    }
  }
}
