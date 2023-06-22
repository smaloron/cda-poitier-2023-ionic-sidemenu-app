import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SyntheseVocalePageRoutingModule } from './synthese-vocale-routing.module';

import { SyntheseVocalePage } from './synthese-vocale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SyntheseVocalePageRoutingModule
  ],
  declarations: [SyntheseVocalePage]
})
export class SyntheseVocalePageModule {}
