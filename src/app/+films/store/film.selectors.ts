import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FilmState, FilmsState, ActorsState } from './film.reducers';
import { Film } from 'src/app/shared/models/Films.models';

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

export const selectFilmWithActors = (id: string) =>
  createSelector(
    selectFilms,
    selectActors,
    (filmsState: FilmsState, actorsState: ActorsState) => {
      if (!!actorsState.actors && !!filmsState.films) {
        const actors = Object.values(actorsState.actors);
        const film = Object.values(filmsState.films).filter(
          film => film.imdbId === id
        )[0] as unknown as Film;

        const populatedFilm = {
          ...film,
          actors: actors.filter(actor =>
            film.actors.some(filmActor => filmActor.imdbId === actor.imdbId)
          )
        };

        return populatedFilm;
      }
      return null;
    }
  );
