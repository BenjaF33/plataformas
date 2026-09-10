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
    path: 'navbar',
    loadComponent: () => import('./navbar/navbar.page').then( m => m.NavbarPage)
  },
  {
    path: 'notificacion',
    loadComponent: () => import('./notificacion/notificacion.page').then( m => m.NotificacionPage)
  },
  {
    path: 'torneo',
    loadComponent: () => import('./torneo/torneo.page').then( m => m.TorneoPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'canchas',
    loadComponent: () => import('./canchas/canchas.page').then( m => m.CanchasPage)
  },
  {
    path: 'calendario',
    loadComponent: () => import('./calendario/calendario.page').then( m => m.CalendarioPage)
  },
];
