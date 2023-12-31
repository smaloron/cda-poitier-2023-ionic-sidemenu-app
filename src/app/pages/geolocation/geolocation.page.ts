import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Map, tileLayer, marker, icon, LatLngExpression } from 'leaflet';

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

      const pos = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true
      });
      this.leafLetInit(pos.coords);
      // Espionne le changement de géolocalisation
      /*
      await Geolocation.watchPosition(
        {
          enableHighAccuracy: true,
          maximumAge: 1000,
          timeout: 1000
        },
        (pos: any) => {
          this.coords = pos;
          this.leafLetInit(pos.coords);
        }
      );*/

    } catch (error) {
      console.log(error);
    }
  }

  getDateFromTimestamp(timestamp: number) {
    return new Date(timestamp);
  }

  ionViewDidEnter() {
    this.map = new Map('map');
  }

  leafLetInit(coords: any) {
    const origin: LatLngExpression = [coords.latitude, coords.longitude];
    this.map.setView(origin, 23);

    const markerIcon = icon({
      iconUrl: 'assets/icon/favicon.png',
      iconSize: [30, 30]
    });

    const hereMarker = marker(origin, {
      icon: markerIcon,
      title: 'Vous êtes ici...',
      draggable: true
    });

    hereMarker.bindPopup('<h1>Vous êtes ici chez moi</h1>');

    hereMarker.addTo(this.map);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('click', (even) => console.log(even));

  }


}
