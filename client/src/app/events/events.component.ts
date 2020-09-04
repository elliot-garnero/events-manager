import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Event {}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  title = 'projetevents';
  searchLocation;
  category;
  searchText;
  range;
  events: Event[];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(this.showLocation);
    this.getEvents();
  }

  saverange(event) {
    this.searchLocation = event;
    this.httpClient
      .get<any>(
        'https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=p5mpBsMTrpLnDjb8&location=' +
          this.searchLocation
      )
      .subscribe((response) => {
        this.events = response.events.event;
      });
  }

  onChange(event) {
    this.category = event;
    let latitude = localStorage.getItem('latitude');
    let longitude = localStorage.getItem('longitude');
    this.httpClient
      .get<any>(
        'https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=p5mpBsMTrpLnDjb8&category=' +
          this.category +
          '&where=' +
          latitude +
          ',' +
          longitude +
          '&within=100'
      )
      .subscribe((response) => {
        console.log(response);
        this.events = response.events.event;
      });
  }

  showLocation(position) {
    localStorage.setItem('latitude', position.coords.latitude);
    localStorage.setItem('longitude', position.coords.longitude);
  }

  getEvents() {
    let latitude = localStorage.getItem('latitude');
    let longitude = localStorage.getItem('longitude');
    this.httpClient
      .get<any>(
        'https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=p5mpBsMTrpLnDjb8&where=' +
          latitude +
          ',' +
          longitude +
          '&within=100'
      )
      .subscribe((response) => {
        this.events = response.events.event;
      });
  }
}
