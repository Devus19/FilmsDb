import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FilmActions, FilmActionTypes } from './film.actions';
import { FilmsService } from '../services/films.service';

@Injectable()
export class FilmEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilmActions.loadFilms),
      mergeMap(() =>
        this.filmsService.getMovies().pipe(
          map(res => ({
            type: FilmActionTypes.loadFilmsSuccess,
            payload: res
          })),
          catchError(() => throwError('whoops'))
        )
      )
    )
  );

  loadActors$ = createEffect(() =>
          this.actions$.pipe(
            ofType(FilmActions.loadActors),
            mergeMap(() => this.filmsService.getActors().pipe(
              map(res => ({
                type: FilmActionTypes.loadActorsSuccess,
                payload: res
              })),
              catchError(() => throwError('whooops2'))
            ))
          )
  );

  constructor(private actions$: Actions, private filmsService: FilmsService) {}
}
