import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
})
export class LoginPanelComponent implements OnInit {
  login = '';
  password = '';
  userData: any = { isLogged: false };
  errMsg = '';

  constructor(
    private user: UserService,
    private router: Router,
    private http: HttpClient
  ) {}

  logIn() {
    if (this.login.length > 0 && this.password.length > 0) {
      this.logInAsync().subscribe((data: any) => {
        if (data.status === undefined) {
          this.user.logIn(data);
          this.errMsg = '';
          this.router.navigateByUrl('/panel');
        } else {
          this.errMsg = data.msg;
        }
      });
    }
  }

  logInAsync() {
    return this.http.post('http://localhost:3000/login', {
      login: this.login,
      password: this.password,
    });
  }

  ngOnInit(): void {
    if (this.user.userData.isLogged === false) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/panel');
    }
  }
}
