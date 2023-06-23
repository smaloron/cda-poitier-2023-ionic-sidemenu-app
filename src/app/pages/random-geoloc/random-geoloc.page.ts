
import { Component, OnInit } from '@angular/core';

import { LatLngExpression, Map, tileLayer, icon, marker } from 'leaflet';
import { RandomUserService, Person } from '../../services/random-user.service';





@Component({
  selector: 'app-random-geoloc',
  templateUrl: './random-geoloc.page.html',
  styleUrls: ['./random-geoloc.page.scss'],
})
export class RandomGeolocPage implements OnInit {

  map!: Map;

  constructor(private userService: RandomUserService) { }

  ionViewDidEnter() {
    this.map = new Map('mapView');

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
        (response: Person[]) => {
          this.initMap(response);
        }
      );
  }

  initMap(persons: Person[]) {
    const origin: LatLngExpression = [persons[0].latitude, persons[0].longitude];
    this.map.setView(origin, 3);

    const markerIcon = icon({
      iconUrl: '/assets/icon/map-marker.png',
      iconSize: [30, 30]
    });

    for (let p of persons) {

      marker([p.latitude, p.longitude],
        { title: p.fullName, icon: markerIcon }

      )
        .bindPopup(`<h3>${p.fullName}</h3><h5>${p.address}</h5>`)
        .addTo(this.map);
    }

  }

}
