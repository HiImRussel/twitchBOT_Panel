import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss'],
})
export class MainPanelComponent implements OnInit {
  constructor(private user: UserService, private router: Router) {}

  currentView = 'banned-words';

  setView(view: string) {
    this.currentView = view;
  }

  ngOnInit(): void {
    if (this.user.userData.isLogged === false) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/panel');
    }

    this.user.getUserData().subscribe((data: any) => {
      if (data.isLogged === false) {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
