import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidacaoCosturaPage } from './validacao-costura.page';

const routes: Routes = [
  {
    path: '',
    component: ValidacaoCosturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidacaoCosturaPageRoutingModule {}
