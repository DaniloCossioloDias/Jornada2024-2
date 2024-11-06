import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaFinalPage } from './tela-final.page';

const routes: Routes = [
  {
    path: '',
    component: TelaFinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaFinalPageRoutingModule {}
