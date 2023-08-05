import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'add-song',
    loadChildren: () => import('./add-song/add-song.module').then(m => m.AddSongPageModule)
  },
  {
    path: 'edit-song/:id',
    loadChildren: () => import('./edit-song/edit-song.module').then(m => m.EditSongPageModule)
  },
  {
    path: 'farm',
    loadChildren: () => import('./farm/farm.module').then(m => m.FarmModule)
  },
{
  path: 'login', component: LoginComponent, pathMatch: 'full'
},
{
  path: 'dashboard', component: DashboardComponent, pathMatch: 'full'
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
