import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { UserService } from '../user.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  title = 'projetevents';
  searchText;
  events: Event[];
  signinForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;
  username:String="";
  bio:String="";
  constructor(private us:UserService, private fb: FormBuilder, private authService: AuthService, private httpClient: HttpClient) {}

  saveapi(val)
  {
    console.log(val);
    this.username=val.username;
    this.bio=val.bio;
    var fd=new FormData();
    fd.append("username",val.username);
    fd.append("bio",val.bio);
    this.us.demoapi(fd).subscribe((data)=>{
      console.log(data);
    });
  }

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
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
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
