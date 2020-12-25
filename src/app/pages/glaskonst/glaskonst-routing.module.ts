import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlaskonstPage } from './glaskonst.page';

const routes: Routes = [
  {
    path: '',
    component: GlaskonstPage
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlaskonstPageRoutingModule {}
