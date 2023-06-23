import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';
import { ConvertTemperaturePipe } from 'src/app/pipes/convertTemperature';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CapitalizePipe, ConvertTemperaturePipe]
})
export class HomePageModule { }
