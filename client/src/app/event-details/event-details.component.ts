import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  params;
  eventLocation;
  eventSearch;
  Events;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.eventLocation = params['location'];
      this.eventSearch = params['search'];
    });
    console.log(this.eventLocation);
    console.log(this.eventSearch);
    this.getEvent();
  }

  getEvent() {
    this.httpClient
      .get<any>(
        'https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=p5mpBsMTrpLnDjb8&q=' +
          this.eventSearch +
          '&l=' +
          this.eventLocation
      )
      .subscribe((response) => {
        this.Events = response.events.event;
        console.log(this.Events);
      });
      
  }
}
