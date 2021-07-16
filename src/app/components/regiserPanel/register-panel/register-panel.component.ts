import { UserService } from './../../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss'],
})
export class RegisterPanelComponent implements OnInit {
  userName = '';
  login = '';
  password = '';
  msg = '';

  constructor(
    private http: HttpClient,
    private user: UserService,
    private location: Location
  ) {}

  registerSend(e: Event) {
    e.preventDefault();
    if (
      this.userName.length > 0 &&
      this.login.length > 0 &&
      this.password.length > 0
    ) {
      this.registerAsync().subscribe((data: any) => {
        if (data.status === 'ok') {
          this.msg = 'Registration complete go back and login!';
        }
      });
    }
  }

  registerAsync() {
    return this.http.post('http://127.0.0.1:3000/register', {
      name: this.userName,
      login: this.login,
      password: this.password,
    });
  }

  ngOnInit(): void {}
}
