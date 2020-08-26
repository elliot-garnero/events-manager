import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Friend {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string,
    public address: string,
  ) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projetevents';
  friends: Friend[];
  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(){
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(
      response => {
        console.log(response);
        this.friends = response;
      }
    );
  }
}
