import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  coords: any;

  map!: Map;

  constructor() { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  async getCurrentLocation() {
    try {

      const allowedToLocate = await Geolocation.checkPermissions();
      if (!allowedToLocate) {
        await Geolocation.requestPermissions({
          permissions: ['location', 'coarseLocation']
        });
      }

      //this.coords = await Geolocation.getCurrentPosition();

      // Espionne le changement de géolocalisation
      await Geolocation.watchPosition(
        {
          enableHighAccuracy: true,
          maximumAge: 1000,
          timeout: 1000
        },
        (pos: any) => {
          this.coords = pos;
          console.log(this.coords);
        }
      );

    } catch (error) {
      console.log(error);
    }
  }

  getDateFromTimestamp(timestamp: number) {
    return new Date(timestamp);
  }

  ionViewDidEnter() {
    this.leafLetInit();
  }

  leafLetInit() {
    this.map = new Map('map');
    this.map.setView([33.6396965, -84.4304574], 23);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('click', (even) => console.log(even));

  }


}
