import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FilmsCountComponent } from './components/films-count/films-count.component';
import { FilmsPaginationComponent } from './components/films-pagination/films-pagination.component';
import { FilmsTableComponent } from './components/films-table/films-table.component';
import { FilmListComponent } from './containers/film-list/film-list.component';

@NgModule({
  declarations: [
    FilmsCountComponent,
    FilmsPaginationComponent,
    FilmsTableComponent,
    FilmListComponent
  ],
  imports: [CommonModule, RouterModule]
})
export class FilmListModule {}
