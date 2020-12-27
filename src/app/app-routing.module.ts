import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'renoveringar',
    loadChildren: () => import('./pages/renoveringar/renoveringar.module').then( m => m.RenoveringarPageModule)
  },
  {
    path: 'glaskonst',
    loadChildren: () => import('./pages/glaskonst/glaskonst.module').then( m => m.GlaskonstPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/renoveringar/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/renoveringar/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/renoveringar/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/renoveringar/about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
