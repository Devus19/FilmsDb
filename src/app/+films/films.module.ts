import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmListModule } from './modules/film-list/film-list.module';
import { FilmDetailsModule } from './modules/film-details/film-details.module';
import { StoreModule } from '@ngrx/store';
import { FilmsReducer } from './store/film.reducers';
import { EffectsModule } from '@ngrx/effects';
import { FilmEffects } from './store/film.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('Film', FilmsReducer),
    EffectsModule.forFeature([FilmEffects]),
    FilmListModule,
    FilmDetailsModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
