import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomGeolocPage } from './random-geoloc.page';

const routes: Routes = [
  {
    path: '',
    component: RandomGeolocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomGeolocPageRoutingModule {}
