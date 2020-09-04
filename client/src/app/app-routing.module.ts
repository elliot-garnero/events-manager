import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { EventsComponent } from './events/events.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'profile',
    component: AuthentificationComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
