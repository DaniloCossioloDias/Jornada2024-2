import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriacaoPedidoPage } from './criacao-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: CriacaoPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriacaoPedidoPageRoutingModule {}
