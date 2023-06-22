import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials, User } from '../../shared/interfaces';
import { Observable, pipe, tap } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  submit() {
    if(this.form.invalid) {
      return;
    }

    const credentials = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.userService.login(credentials)
    .pipe(
      tap((user) => {
        if (!(typeof user === 'string')) {
          this.userService.setCurrentUser(user);
          this.userService.setToken(user.token);
        }
      })
    )
    .subscribe((user) => console.log(user)
    )
  }
}
