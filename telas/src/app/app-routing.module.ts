import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pre-corte',
    pathMatch: 'full'
  },
  {
    path: 'pre-corte',
    loadChildren: () => import('./pre-corte/pre-corte.module').then( m => m.PreCortePageModule)
  },
  {
    path: 'pos-corte',
    loadChildren: () => import('./pos-corte/pos-corte.module').then( m => m.PosCortePageModule)
  },
  {
    path: 'validacao-costura',
    loadChildren: () => import('./validacao-costura/validacao-costura.module').then( m => m.ValidacaoCosturaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
