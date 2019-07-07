import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () => import('./+films/films.module').then(m => m.FilmsModule),
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () => import('./+login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./+welcome/welcome.module').then(m => m.WelcomeModule),
    pathMatch: 'full'
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
