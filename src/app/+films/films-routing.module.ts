import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FilmListComponent } from './modules/film-list/containers/film-list/film-list.component';
import { FilmDetailsComponent } from './modules/film-details/containers/film-details/film-details.component';

const routes: Routes = [
  {
    path: ':page',
    canActivate: [AuthGuard],
    component: FilmListComponent
  },
  {
    path: 'details/:id',
    canActivate: [AuthGuard],
    component: FilmDetailsComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    redirectTo: '/films/1'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule {}
