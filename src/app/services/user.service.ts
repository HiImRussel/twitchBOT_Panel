import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: User = { isLogged: false };

  userDataObservable = new Subject();

  constructor() {}

  logIn = () => {
    this.userData = {
      isLogged: true,
    };

    this.userDataObservable.next(this.userData);
  };

  getUserData = () => {
    return this.userDataObservable.asObservable();
  };
}
