import { ActorsResponse, FilmResponse } from 'src/app/shared/films/models/films.models';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {} from '@angular/router';

import { SorterService } from './sorter.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  constructor(
    private http: HttpClient,
    private sorter: SorterService
  ) {

  }

  private httpParams = new HttpParams();
  private limit = 5;
  private page = 1;

  setLimit(limit: number) {
    window.sessionStorage.setItem('pageLimit', limit.toString());
    this.limit = limit;
  }

  setPage(page: number) {
    this.page = page;
  }

  getPage() {
    return this.page;
  }

  getLimit() {
    return this.limit;
  }

  getMovies() {
    const { byWhat, order } = this.sorter.getSorting();
    this.limit = +window.sessionStorage.getItem('pageLimit');

    this.httpParams = this.httpParams
      .set('limit', this.limit.toString())
      .set('page', this.page.toString())
      .set('sortBy', byWhat)
      .set('sortDir', order);

    return this.http.get<FilmResponse>(
      'https://marblejs-example.herokuapp.com/api/v1/movies',
      { params: this.httpParams }
    );
  }

  getActors() {
    return this.http.get<ActorsResponse>('https://marblejs-example.herokuapp.com/api/v1/actors');
  }
}
