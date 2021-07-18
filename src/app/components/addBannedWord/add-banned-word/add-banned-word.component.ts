import { UserService } from './../../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-banned-word',
  templateUrl: './add-banned-word.component.html',
  styleUrls: ['./add-banned-word.component.scss'],
})
export class AddBannedWordComponent implements OnInit {
  perm = true;
  wordName: string = '';
  time: number = 0;

  @Output()
  viewEmmiter = new EventEmitter();

  constructor(private http: HttpClient, private user: UserService) {}

  changeType(e: any) {
    switch (e.target.value) {
      case 'perm':
        this.perm = true;
        break;
      case 'timeout':
        this.perm = false;
        break;
    }
  }

  add() {
    if (this.wordName.length > 0) {
      this.http
        .post('http://localhost:3000/addWord', {
          name: this.wordName,
          isPerm: this.perm,
          time: this.time,
          userId: this.user.userData.id,
        })
        .subscribe((data) => console.log(data));
    }
  }

  goBack() {
    this.viewEmmiter.emit('banned-words');
  }

  ngOnInit(): void {}
}
