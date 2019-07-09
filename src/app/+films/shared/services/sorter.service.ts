import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Sort, sortBy, sortDir } from '../models/film.models';

@Injectable({
  providedIn: 'root'
})
export class SorterService {
  constructor() {}

  private defaultSort: Sort = {
    byWhat: null,
    order: null
  };
  private sortUpdater = new BehaviorSubject<Sort>(this.defaultSort);

  getSortUpdater() {
    const savedSort = this.getSorting();
    if (!!savedSort) {
      this.sortUpdater.next(savedSort);
    }
    return this.sortUpdater.asObservable();
  }

  getSorting(): Sort | undefined {
    return JSON.parse(window.sessionStorage.getItem('sort'));
  }

  setSorting(sortBy: sortBy) {
    let sort: Sort = this.defaultSort;

    if (!!this.getSorting()) {
      sort = this.getSorting();
    }

    if (sort.byWhat === sortBy) {
      sort.order = (+sort.order * -1).toString() as sortDir;
    } else {
      sort.byWhat = sortBy;
      sort.order = '1';
    }

    this.sortUpdater.next(sort);
    window.sessionStorage.setItem('sort', JSON.stringify(sort));
  }
}
