import { throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { FilmsService } from '../shared/services/films.service';
import { FilmActions } from './film.actions';

@Injectable()
export class FilmEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilmActions.loadFilms),
      mergeMap(() =>
        this.filmsService.getMovies().pipe(
          map(res => FilmActions.loadFilmsSuccess(res)),
          catchError(() => throwError('whoops'))
        )
      )
    )
  );

  loadActors$ = createEffect(() =>
          this.actions$.pipe(
            ofType(FilmActions.loadActors),
            mergeMap(() => this.filmsService.getActors().pipe(
              map(res => FilmActions.loadActorsSuccess(res)),
              catchError(() => throwError('whooops2'))
            ))
          )
  );

  constructor(private actions$: Actions, private filmsService: FilmsService) {}
}
