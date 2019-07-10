import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/auth/auth.guard';
import { PageNotFoundComponent } from './shared/containers/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'films',
    canLoad: [AuthGuard],
    loadChildren: () => import('./+films/films.module').then(m => m.FilmsModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./+login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
