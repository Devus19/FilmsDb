import { Sort, sortBy } from 'src/app/+films/shared/film.models';
import { FilmsFacadeService } from 'src/app/+films/shared/films-facade.service';
import { Films } from 'src/app/shared/films/models/films.models';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AutoUnsubscribe } from 'src/app/shared/shared/autoUnsubscribe.adapter';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent extends AutoUnsubscribe implements OnInit {
  sortedBy: Sort;
  currentPage: number;
  numberOfPages: number;
  itemsPerPage: number;
  films: Films;
  page: number;
  isLoading: boolean;

  constructor(
    private facade: FilmsFacadeService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.subs.sink = this.facade.getSorter().subscribe(val => (this.sortedBy = val));
    this.facade.loadFilms();
    this.subs.sink = this.facade.getFilmsInfo().subscribe(filmInfo => {
      const numberOfPages = Math.ceil(
        filmInfo.totalFilms / this.facade.getLimit()
      );

      this.itemsPerPage = this.facade.getLimit();
      this.numberOfPages = numberOfPages;
      this.currentPage = this.facade.getPage();
      this.films = filmInfo.films;
      this.isLoading = false;
    });

    this.subs.sink = this.route.paramMap.subscribe((params: ParamMap) => {
      if (!!params.get('page')) {
        this.setPage(+params.get('page'));
      }
    });
  }

  sortBy(what: sortBy) {
    this.facade.setSorting(what);
    this.isLoading = true;
  }

  setItemsPerPage(items: number) {
    this.facade.setLimit(items);
    this.isLoading = true;
  }

  setPage(page: number) {
    this.facade.setPage(page);
    this.isLoading = true;
  }
}
