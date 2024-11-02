import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreCortePage } from './pre-corte.page';

const routes: Routes = [
  {
    path: '',
    component: PreCortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreCortePageRoutingModule {}
