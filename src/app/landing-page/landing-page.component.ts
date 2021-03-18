import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  appServers: {
    id: number,
    icon: string,
    name: string
  }[] = [
      { "id": 1, "icon": "computer", "name": "Computer" },
      { "id": 2, "icon": "headset", "name": "Headset" },
      { "id": 3, "icon": "mouse", "name": "Mouse" },
      { "id": 4, "icon": "phone_iphone", "name": "Phone" },
      { "id": 5, "icon": "router", "name": "Router" },
      { "id": 6, "icon": "watch", "name": "Watch" },
      { "id": 7, "icon": "tv", "name": "TV" },
      { "id": 8, "icon": "keyboard", "name": "Keyboard" }
    ]


  constructor() { }

  ngOnInit(): void {
  }

}
