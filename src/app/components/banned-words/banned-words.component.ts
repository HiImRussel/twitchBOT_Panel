import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-banned-words',
  templateUrl: './banned-words.component.html',
  styleUrls: ['./banned-words.component.scss'],
})
export class BannedWordsComponent implements OnInit {
  words: any = [];

  @Output()
  viewEmmiter = new EventEmitter();

  @Output()
  wordEmmiter = new EventEmitter();

  constructor(private user: UserService, private http: HttpClient) {}

  deleteWord(id: string) {
    this.words = this.words.filter((word: any) => word._id !== id);
    this.http
      .delete('http://127.0.0.1:3000/deleteWord/' + id)
      .subscribe((data) => console.log(data));
  }

  goToAdd() {
    this.viewEmmiter.emit('add-word');
  }

  edit(word: any) {
    this.viewEmmiter.emit('edit-word');
    this.wordEmmiter.emit(word);
  }

  ngOnInit(): void {
    this.http
      .post('http://localhost:3000/getWords', {
        userId: this.user.userData.id,
      })
      .subscribe((data: any) => (this.words = data.words));
  }
}
