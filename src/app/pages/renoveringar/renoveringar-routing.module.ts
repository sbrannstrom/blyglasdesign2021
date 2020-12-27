import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenoveringarPage } from './renoveringar.page';

const routes: Routes = [
  {
    path: '',
    component: RenoveringarPage
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenoveringarPageRoutingModule {}
