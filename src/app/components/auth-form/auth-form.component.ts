import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Credentials, User } from 'src/app/interfaces';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  authForm!: FormGroup;

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
    });
    console.log(this.authForm);
  }

  submitForm() {
    console.log(this.authForm);
    if (this.authForm.valid) {
      console.log('Відправлено:', this.authForm.value);
    }
  }

  login(credentials: Credentials): Observable<User | string>{
    return new Observable((observer) => {
        setTimeout(() => {
            if (credentials.email === 'test@gmail.com'){
                observer.next({
                    name: 'Admin user',
                    email: 'test@gmail.com',
                    token: 'ikdjsaogiknk42tio3n2orhnol',
                    admin: true
                });
            }else if (credentials.email === 'vova@gmail.com'){
                observer.next({
                    name: 'User',
                    email: 'vova@gmail.com',
                    token: 'ikdjdskljflkodsjfkldjslk',
                    admin: false
                });
            }else{
                observer.next('Wrong password');
            }
        }, 2000)
    });
    setTimeout(() => {
            
        }, 50000)
}


}
