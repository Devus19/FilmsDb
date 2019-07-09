import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FilmState, FilmsState, ActorsState } from './film.reducers';

export const getFilmsFeatureState = createFeatureSelector<FilmState>('Film');

export const selectFilms = createSelector(
  getFilmsFeatureState,
  (state: FilmState) => ({
    films: state.films,
    totalFilms: state.totalFilms
  })
);

export const selectActors = createSelector(
  getFilmsFeatureState,
  (state: FilmState) => ({ actors: state.actors })
);

export const selectFilmsWithActors = createSelector(
  selectFilms,
  selectActors,
  (films: FilmsState, actorsState: ActorsState) => {
    if (!!actorsState.actors && films.films) {
      const actors = Object.values(actorsState.actors);

      return Object.values(films.films).map(film => ({
        ...film,
        actors: actors.filter(actor =>
          film.actors.includes({ imdbId: actor.imdbId, name: actor.name })
        )
      }));
    }
    return null;
  }
);
