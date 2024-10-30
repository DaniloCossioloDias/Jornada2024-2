import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnfestoPage } from './enfesto.page';

const routes: Routes = [
  {
    path: '',
    component: EnfestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnfestoPageRoutingModule {}
