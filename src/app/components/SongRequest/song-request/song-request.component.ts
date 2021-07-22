import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-request',
  templateUrl: './song-request.component.html',
  styleUrls: ['./song-request.component.scss'],
})
export class SongRequestComponent implements OnInit {
  isOn = false;

  constructor(private http: HttpClient, private user: UserService) {}

  ngOnInit(): void {
    this.http
      .post('http://localhost:3000/checkSr', {
        id: this.user.userData.id,
      })
      .subscribe((data: any) => {
        if (data.status === 'ok') {
          this.isOn = data.srStatus;
        }
      });
  }
}
