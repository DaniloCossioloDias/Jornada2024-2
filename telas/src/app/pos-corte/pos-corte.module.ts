import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosCortePageRoutingModule } from './pos-corte-routing.module';

import { PosCortePage } from './pos-corte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosCortePageRoutingModule
  ],
  declarations: [PosCortePage]
})
export class PosCortePageModule {}
