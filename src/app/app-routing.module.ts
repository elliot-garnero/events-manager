import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { AuthentificationComponent } from './authentification/authentification.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'profile',
    component: AuthentificationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
