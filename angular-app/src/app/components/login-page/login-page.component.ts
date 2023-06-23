import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials, User } from '../../shared/interfaces';
import { Observable, pipe, tap } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })

    this.userService.isLogged$.subscribe(isLogged => {
      if (!isLogged) this.router.navigate(['/login'])
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
    .subscribe((user: User | string) => {
      if (!(typeof user === 'string')) {
        switch (user.admin) {
          case true: this.router.navigate(['/library-admin'])
          break;
          case false: this.router.navigate(['/library-user'])
          break;
        }
        this.userService.isLogged$.next(true);
      }
    })

    setTimeout(() => {
       localStorage.removeItem('token');
       this.userService.isLogged$.next(false);
    }, 50000)
  }
}
