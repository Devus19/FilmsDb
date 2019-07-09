import { createReducer, Action, on } from '@ngrx/store';
import { Film, Actor } from 'src/app/shared/models/Films.models';
import { FilmActions } from './film.actions';

export interface FilmState {
  films: { [keys: number]: Film };
  totalFilms: number;
  actors: { [keys: number]: Actor };
}

export interface FilmsState {
  films: { [keys: number]: Film };
  totalFilms: number;
}

export interface ActorsState {
  actors: { [keys: number]: Actor };
}

export const initialState: FilmState = {
  films: null,
  totalFilms: null,
  actors: null
};

const reducer = createReducer(
  initialState,
  on(FilmActions.loadFilmsSuccess, (state, action) => ({
    ...state,
    films: action.collection,
    totalFilms: action.total
  })),
  on(FilmActions.loadActorsSuccess, (state, action) => ({
    ...state,
    actors: action.collection
  }))
);

export function FilmsReducer(state: FilmState | undefined, action: Action) {
  return reducer(state, action);
}
