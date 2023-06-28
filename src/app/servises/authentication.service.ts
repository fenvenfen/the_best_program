import { Injectable } from '@angular/core';
import { Credentials, User } from '../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private TOKEN = 'TOKEN';
  private CURRENT_USER = 'CURRENT_USER';

  currentUser_Sub = new BehaviorSubject<User | null>(null);
  currentUser$?: Observable<User | null>;

  token_Sub = new BehaviorSubject<string | null>(null);
  token$?: Observable<string | null>;

  constructor() {
    this.currentUser$ = this.currentUser_Sub.asObservable();
    this.token$ = this.token_Sub.asObservable();
  }

  login(credentials: Credentials): Observable<User | string> {
    return new Observable((observer) => {
      setTimeout(() => {
        if (credentials.email === 'test@gmail.com') {
          observer.next({
            name: 'Admin user',
            email: 'test@gmail.com',
            token: 'ikdjsaogiknk42tio3n2orhnol',
            admin: true,
          });
        } else if (credentials.email === 'vova@gmail.com') {
          observer.next({
            name: 'User',
            email: 'vova@gmail.com',
            token: 'ikdjdskljflkodsjfkldjslk',
            admin: false,
          });
        } else {
          observer.next('Wrong password');
        }
      }, 2000);
    });
  }
  
  setToken(token: string) {
    localStorage.setItem(this.TOKEN, JSON.stringify(token));
    setTimeout(() => {
      this.token_Sub.next(null);
      localStorage.removeItem(this.TOKEN);
    }, 10000);
  }
  
  setCurrentUser(user: User): void {
    this.currentUser_Sub.next(user)
    localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
  }  
}
