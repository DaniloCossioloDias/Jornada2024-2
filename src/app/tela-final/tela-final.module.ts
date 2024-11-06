import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaFinalPageRoutingModule } from './tela-final-routing.module';

import { TelaFinalPage } from './tela-final.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaFinalPageRoutingModule
  ],
  declarations: [TelaFinalPage]
})
export class TelaFinalPageModule {}
