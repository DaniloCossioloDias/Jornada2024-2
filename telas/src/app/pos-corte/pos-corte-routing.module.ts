import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosCortePage } from './pos-corte.page';

const routes: Routes = [
  {
    path: '',
    component: PosCortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosCortePageRoutingModule {}
