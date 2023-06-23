import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LatLngExpression, Map, tileLayer, icon, marker } from 'leaflet';

const URL = 'https://randomuser.me/api?results=100&nat=fr';

interface Person {
  latitude: number;
  longitude: number;
  fullName: string;
  address: string
}

@Component({
  selector: 'app-random-geoloc',
  templateUrl: './random-geoloc.page.html',
  styleUrls: ['./random-geoloc.page.scss'],
})
export class RandomGeolocPage implements OnInit {

  map!: Map;

  constructor(private http: HttpClient) { }

  ionViewDidEnter() {
    this.map = new Map('mapView');

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  ngOnInit() {
    const request = this.http.get(URL);

    request
      .pipe(
        map((response: any) => {
          const data = response.results
          console.log(data);
          return data.map((item: any) => {
            return {
              fullName: item.name.first + ' ' + item.name.last,
              latitude: item.location.coordinates.latitude,
              longitude: item.location.coordinates.longitude,
              address: item.location.street.number + ' ' + item.location.street.name + ' ' + item.location.postcode + ' ' + item.location.city
            }
          });
        }
        )
      )
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
