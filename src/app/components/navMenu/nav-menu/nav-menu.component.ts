import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Output()
  currentViewEmmiter = new EventEmitter();

  constructor() {}

  setView(view: string) {
    this.currentViewEmmiter.emit(view);
  }

  ngOnInit(): void {}
}
