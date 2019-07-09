import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmDetailsModule } from './modules/film-details/film-details.module';
import { FilmListModule } from './modules/film-list/film-list.module';
import { FilmEffects } from './store/film.effects';
import { FilmsReducer } from './store/film.reducers';

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
