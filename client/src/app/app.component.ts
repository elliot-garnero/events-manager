import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

export class Friend {
  // constructor(
  //   public id: number,
  //   public name: string,
  //   public username: string,
  //   public email: string,
  //   public address: string
  // ) {}
}

export class Event {
  // constructor(public id: number, public name: string, public address: string) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'projetevents';
  searchText;
  friends: Friend[];
  events: Event[];
  signinForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;
  constructor(private fb: FormBuilder, private authService: AuthService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });

    this.getFriends();
    //this.getEvents();
    this.fbLibrary();
  }
  
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }
  
  getFriends() {
    this.httpClient
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => {
        console.log(response);
        this.friends = response;
      });
  }

  fbLibrary() {
    (window as any).fbAsyncInit = function () {
      window['FB'].init({
        appId: '436417747304974',
        cookie: true,
        xfbml: true,
        version: 'v3.1',
      });
      window['FB'].AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }
}
