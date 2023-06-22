import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SyntheseVocalePage } from './synthese-vocale.page';

const routes: Routes = [
  {
    path: '',
    component: SyntheseVocalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SyntheseVocalePageRoutingModule {}
