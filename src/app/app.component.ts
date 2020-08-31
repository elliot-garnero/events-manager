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
  searchText;
  friends: Friend[];
  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getFriends();
    this.fbLibrary();
  }

  getFriends(){
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(
      response => {
        console.log(response);
        this.friends = response;
      }
    );
  }

    fbLibrary() {
      (window as any).fbAsyncInit = function() {
        window['FB'].init({
          appId      : '436417747304974',
          cookie     : true,
          xfbml      : true,
          version    : 'v3.1'
        });
        window['FB'].AppEvents.logPageView();
      };
  
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  }

    login() {
      window['FB'].login((response) => {
          console.log('login response',response);
          if (response.authResponse) {
  
            window['FB'].api('/me', {
              fields: 'last_name, first_name, email'
            }, (userInfo) => {
  
              console.log("user information");
              console.log(userInfo);
            });
            
          } else {
            console.log('User login failed');
          }
      }, {scope: 'email'});
  }
}
