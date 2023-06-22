import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, pipe } from 'rxjs';
import { Credentials, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: User;
  isLogged$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  login(credentials: Credentials): Observable<User | string> {
    return new Observable((observer) => {
      setTimeout(() => {
          if (credentials.email === 'test@gmail.com'){
              observer.next({
                  name: 'Григорій',
                  email: 'test@gmail.com',
                  token: 'ikdjsaogiknk42tio3n2orhnol',
                  admin: true
              });
          }else if (credentials.email === 'vova@gmail.com'){
              observer.next({
                  name: 'Степан',
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

  setCurrentUser(user: User) {
    this.user = user;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
