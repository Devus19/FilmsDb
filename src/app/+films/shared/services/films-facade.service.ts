import { Observable } from 'rxjs';
import { FilmPopulated } from 'src/app/shared/films/models/films.models';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { FilmActions } from '../../store/film.actions';
import { FilmsState, FilmState } from '../../store/film.reducers';
import { selectFilms, selectFilmWithActors } from '../../store/film.selectors';
import { sortBy } from '../models/film.models';
import { FilmsService } from './films.service';
import { SorterService } from './sorter.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsFacadeService {
  constructor(
    private sorter: SorterService,
    private filmsService: FilmsService,
    private store: Store<FilmState>,
    private router: Router
  ) {}

  getSorter() {
    return this.sorter.getSortUpdater();
  }

  setSorting(sortBy: sortBy) {
    this.sorter.setSorting(sortBy);
    this.loadFilms();
  }

  setLimit(limit: number) {
    this.router.navigate(['films', 1]);
    this.filmsService.setLimit(limit);
    this.loadFilms();
  }

  getLimit() {
    return this.filmsService.getLimit();
  }

  setPage(page: number) {
    this.router.navigate(['films', page]);
    this.filmsService.setPage(page);
    this.loadFilms();
  }

  getPage() {
    return this.filmsService.getPage();
  }

  loadFilms() {
    this.store.dispatch(FilmActions.loadFilms());
  }

  loadActors() {
    this.store.dispatch(FilmActions.loadActors());
  }

  getFilmsInfo(): Observable<FilmsState> {
    return this.store.select(selectFilms);
  }

  getPopulatedFilm(id: string): Observable<FilmPopulated> {
    return this.store.select(selectFilmWithActors(id));
  }
}
