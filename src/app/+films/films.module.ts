import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmDetailsModule } from './modules/film-details/film-details.module';
import { FilmListModule } from './modules/film-list/film-list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FilmDetailsModule,
    FilmListModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
