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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
