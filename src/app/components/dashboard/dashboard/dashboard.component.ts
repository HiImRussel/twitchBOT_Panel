import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input()
  currentView = 'banned-words';

  wordData: any;

  constructor(private user: UserService) {}

  setView(e: any) {
    this.currentView = e;
  }

  setWord(e: any) {
    this.wordData = e;
  }

  logout() {
    this.user.logout();
  }

  ngOnInit(): void {}
}
