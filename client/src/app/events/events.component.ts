import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Event {
  // constructor(public id: number, public name: string, public address: string) {}
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  title = 'projetevents';
  searchText;
  events: Event[];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.httpClient
      .get<any>(
        'http://api.eventful.com/json/events/search?app_key=M95mQqmTbktTWS9b&location=paris&date=Future&page_size=20&sort_order=date'
      )
      .subscribe((response) => {
        console.log(response.events.event);
        this.events = response.events.event;
      });
  }
}
