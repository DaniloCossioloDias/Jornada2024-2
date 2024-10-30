import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriacaoPedidoPageRoutingModule } from './criacao-pedido-routing.module';

import { CriacaoPedidoPage } from './criacao-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoPedidoPageRoutingModule
  ],
  declarations: [CriacaoPedidoPage]
})
export class CriacaoPedidoPageModule {}
