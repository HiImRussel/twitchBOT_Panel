import { UserService } from './../../../services/user.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss'],
})
export class MainPanelComponent implements OnInit {
  constructor(private user: UserService, private router: Router) {}

  ngOnInit(): void {
    if (this.user.userData.isLogged === false) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/panel');
    }
  }
}
