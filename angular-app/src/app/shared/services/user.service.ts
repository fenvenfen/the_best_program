import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(credentials: Credentials): Observable<User | string> {
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
          }else {
              observer.next('Wrong password');
          }
      }, 2000)
  }) 
  }
}
