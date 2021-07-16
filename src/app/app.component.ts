import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService],
})
export class AppComponent {
  userData: any = { isUserLogged: false };
  constructor(private user: UserService, private location: Location) {}

  ngOnInit(): void {
    this.user.getUserData().subscribe((data) => {
      this.userData = data;
    });
    this.checkStatus();
  }

  checkStatus() {
    if (this.userData.isUserLogged === false) {
      this.location.replaceState('/login');
    }
  }
}
