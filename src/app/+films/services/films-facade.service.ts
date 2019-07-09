import { Injectable } from '@angular/core';
import { SorterService } from './sorter.service';
import { FilmsService } from './films.service';
import { Store } from '@ngrx/store';
import { FilmState, FilmsState } from '../store/film.reducers';
import { FilmActions } from '../store/film.actions';
import { sortBy } from '../types/film.types';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { selectFilms, selectFilmWithActors } from '../store/film.selectors';
import { FilmPopulated } from 'src/app/shared/models/Films.models';

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
