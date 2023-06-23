import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomGeolocPageRoutingModule } from './random-geoloc-routing.module';

import { RandomGeolocPage } from './random-geoloc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomGeolocPageRoutingModule
  ],
  declarations: [RandomGeolocPage]
})
export class RandomGeolocPageModule {}
