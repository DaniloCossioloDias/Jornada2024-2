import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreCortePageRoutingModule } from './pre-corte-routing.module';

import { PreCortePage } from './pre-corte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreCortePageRoutingModule
  ],
  declarations: [PreCortePage]
})
export class PreCortePageModule {}
