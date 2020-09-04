import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { EventsComponent } from './events/events.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { Friend } from './app.component';
import { WebSocketService } from './web-socket.service';
import { ChatComponent } from './chat/chat.component';
import { UsersComponent } from './users/users.component';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('436417747304974')
  }
]);

export function provideConfig() 
{
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    AuthentificationComponent,
    ChatComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    SocialLoginModule,
    ReactiveFormsModule,
  ],
  providers: [
    WebSocketService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
