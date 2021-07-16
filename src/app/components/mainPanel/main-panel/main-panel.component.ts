import { Location } from '@angular/common';
import { UserService } from './../../../services/user.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss'],
})
export class MainPanelComponent implements OnInit {
  userData: any;
  constructor(private user: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user.getUserData().subscribe((data) => (this.userData = data));
    this.userData = this.user.userStatus();
    if (!this.userData.isLogged) {
      this.router.navigateByUrl('/login');
    }
  }
}
