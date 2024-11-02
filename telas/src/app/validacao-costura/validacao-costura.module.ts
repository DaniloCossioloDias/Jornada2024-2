import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidacaoCosturaPageRoutingModule } from './validacao-costura-routing.module';

import { ValidacaoCosturaPage } from './validacao-costura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidacaoCosturaPageRoutingModule
  ],
  declarations: [ValidacaoCosturaPage]
})
export class ValidacaoCosturaPageModule {}
