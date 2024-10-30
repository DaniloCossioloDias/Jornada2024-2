import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'criacao-pedido',
    loadChildren: () => import('./criacao-pedido/criacao-pedido.module').then(m => m.CriacaoPedidoPageModule)
  },
  {
    path: 'enfesto',
    loadChildren: () => import('./enfesto/enfesto.module').then(m => m.EnfestoPageModule)
  },
  {
    path: '',
    redirectTo: 'criacao-pedido',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
