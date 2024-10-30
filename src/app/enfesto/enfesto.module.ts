import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnfestoPageRoutingModule } from './enfesto-routing.module';

import { EnfestoPage } from './enfesto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnfestoPageRoutingModule
  ],
  declarations: [EnfestoPage]
})
export class EnfestoPageModule {}
