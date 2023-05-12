import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'select-city',
    loadChildren: () =>
      import('./pages/select-city/select-city.module').then(
        (m) => m.SelectCityPageModule
      ),
  },
  {
    path: 'bali',
    loadChildren: () => import('./pages/bali/bali.module').then( m => m.BaliPageModule)
  },
  {
    path: 'mexico-city',
    loadChildren: () => import('./pages/mexico-city/mexico-city.module').then( m => m.MexicoCityPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
