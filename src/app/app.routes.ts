import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'canchas',
    loadComponent: () => import('../../app/canchas/canchas.page').then((m) => m.CanchasPage),
  },
];
