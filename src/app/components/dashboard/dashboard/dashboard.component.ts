import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentView = 'banned-words';
  wordData: any;

  constructor() {}

  setView(e: any) {
    this.currentView = e;
  }

  setWord(e: any) {
    this.wordData = e;
  }

  ngOnInit(): void {}
}
