import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-banned-words',
  templateUrl: './banned-words.component.html',
  styleUrls: ['./banned-words.component.scss'],
})
export class BannedWordsComponent implements OnInit {
  words: any = [];

  constructor(private user: UserService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .post('http://localhost:3000/getWords', {
        userId: this.user.userData.id,
      })
      .subscribe((data: any) => (this.words = data.words));
  }
}
