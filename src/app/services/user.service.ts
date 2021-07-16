import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: any = { isLogged: false };

  userDataObservable = new Subject();

  constructor(private http: HttpClient) {}

  logIn(data: any) {
    this.userData = {
      isLogged: true,
      id: data._id,
      name: data.userName,
    };
    this.userDataObservable.next(this.userData);
  }

  userStatus() {
    return this.userData;
  }

  getUserData = () => {
    return this.userDataObservable.asObservable();
  };
}
