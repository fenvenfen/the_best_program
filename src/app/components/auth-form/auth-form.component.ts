import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
    });
  }

  submitForm() {
    console.log(this.authForm);
    if (!this.authForm.valid) {
      return;
    }

    const user$ = this.authService.login(this.authForm.value);

    user$.subscribe({
      next: (value) => {
        if (typeof value === 'string') {
          alert(value);
        } else {
          this.authService.setCurrentUser(value);
          this.authService.setToken(value.token);
        }
      },
    });
    // this.authService.login(this.authForm.value);
  }

}
