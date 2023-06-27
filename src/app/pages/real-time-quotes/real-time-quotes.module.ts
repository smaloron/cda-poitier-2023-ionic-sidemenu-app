import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealTimeQuotesPageRoutingModule } from './real-time-quotes-routing.module';

import { RealTimeQuotesPage } from './real-time-quotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealTimeQuotesPageRoutingModule
  ],
  declarations: [RealTimeQuotesPage]
})
export class RealTimeQuotesPageModule {}
