import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  coords: any;

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

      this.coords = await Geolocation.getCurrentPosition();
      console.log(this.coords);
    } catch (error) {
      console.log(error);
    }
  }

  getDateFromTimestamp(timestamp: number) {
    return new Date(timestamp);
  }

}
