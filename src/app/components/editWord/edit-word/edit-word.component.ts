import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-word',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.scss'],
})
export class EditWordComponent implements OnInit {
  @Input()
  word = { word: '', _id: '', isPerm: false, time: 0 };

  @Output()
  viewEmitter = new EventEmitter();

  constructor(private http: HttpClient) {}

  changeType(e: any) {
    this.word.isPerm = e.target.value === 'perm' ? true : false;
    this.word.time = e.target.value === 'perm' ? 0 : this.word.time;
  }

  goBack() {
    this.viewEmitter.emit('banned-words');
  }

  edit() {
    console.log(this.word);
    this.http
      .patch('http://localhost:3000/editWord', {
        id: this.word._id,
        word: this.word.word,
        isPerm: this.word.isPerm,
        time: this.word.time,
      })
      .subscribe((data: any) => {
        if (data.status === 'ok') {
          this.goBack();
        }
      });
  }
  ngOnInit(): void {}
}
