import { ActorsResponse, FilmResponse } from 'src/app/shared/films/models/films.models';

import { createAction, props } from '@ngrx/store';

export enum FilmActionTypes {
    loadFilms = '[Films] LoadFilms',
    loadFilmsSuccess = '[Films] LoadFilmsSuccess',
    loadFilmsFailure = '[Films] LoadFilmsFailure',
    loadActors = '[Films] LoadActors',
    loadActorsSuccess = '[Films] LoadActorsSuccess',
    loadActorsFailure = '[Films] LoadActorsFailure',
}

export const FilmActions = {
  loadFilms: createAction(FilmActionTypes.loadFilms),
  loadFilmsSuccess: createAction(FilmActionTypes.loadFilmsSuccess, props<FilmResponse>()),
  loadFilmsFailure: createAction(FilmActionTypes.loadFilmsFailure),
  loadActors: createAction(FilmActionTypes.loadActors),
  loadActorsSuccess: createAction(FilmActionTypes.loadActorsSuccess, props<ActorsResponse>()),
  loadActorsFailure: createAction(FilmActionTypes.loadActorsFailure)
};


