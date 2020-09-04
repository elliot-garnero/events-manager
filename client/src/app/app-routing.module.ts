import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { EventsComponent } from './events/events.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UsersComponent } from './users/users.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },

  {
    path: 'events',
    component: EventsComponent,
  },

  {
    path: 'event',
    component: EventDetailsComponent,
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
  exports: [RouterModule, CommonModule],
})
export class AppRoutingModule {}
