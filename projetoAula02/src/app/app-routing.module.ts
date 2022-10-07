import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full'},
  //{ path: '', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  //{ path: '', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
