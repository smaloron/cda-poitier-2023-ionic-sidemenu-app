import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then(m => m.UserListPageModule)
  },
  {
    path: 'star-wars',
    loadChildren: () => import('./pages/star-wars/star-wars.module').then( m => m.StarWarsPageModule)
  },
  {
    path: 'budget',
    loadChildren: () => import('./pages/budget/budget.module').then( m => m.BudgetPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'synthese-vocale',
    loadChildren: () => import('./pages/synthese-vocale/synthese-vocale.module').then( m => m.SyntheseVocalePageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./pages/geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'random-geoloc',
    loadChildren: () => import('./pages/random-geoloc/random-geoloc.module').then( m => m.RandomGeolocPageModule)
  },
  {
    path: 'async-pipe',
    loadChildren: () => import('./pages/async-pipe/async-pipe.module').then( m => m.AsyncPipePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
