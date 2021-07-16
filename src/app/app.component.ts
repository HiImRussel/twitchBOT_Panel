import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService],
})
export class AppComponent {
  constructor(private user: UserService, private router: Router) {}

  ngOnInit(): void {
    if (this.user.userData.isLogged === false) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/panel');
    }
  }
}
