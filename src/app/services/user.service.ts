import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: any = { isLogged: false };

  userDataObservable = new Subject();

  constructor() {}

  logIn(data: any) {
    this.userData = {
      isLogged: true,
      id: data._id,
      name: data.userName,
    };
    this.userDataObservable.next(this.userData);
  }

  logout() {
    this.userData = { isLogged: false };
    this.userDataObservable.next(this.userData);
  }

  userStatus() {
    return this.userData;
  }

  getUserData = () => {
    return this.userDataObservable.asObservable();
  };
}
