import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsCountComponent } from './components/films-count/films-count.component';
import { FilmsPaginationComponent } from './components/films-pagination/films-pagination.component';
import { FilmsTableComponent } from './components/films-table/films-table.component';
import { FilmListComponent } from './containers/film-list/film-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FilmsCountComponent,
    FilmsPaginationComponent,
    FilmsTableComponent,
    FilmListComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule]
})
export class FilmListModule {}
