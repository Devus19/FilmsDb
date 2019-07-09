import { Sort, sortBy, sortDir } from 'src/app/+films/shared/models/film.models';
import { Films } from 'src/app/shared/films/models/films.models';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-films-table',
  templateUrl: './films-table.component.html',
  styleUrls: ['./films-table.component.scss']
})
export class FilmsTableComponent implements OnInit {
  @Input() itemsPerPage: number;
  @Input() currentPage: number;
  @Input() films: Films;
  @Input() isLoading: boolean;
  @Output() sortBy = new EventEmitter<sortBy>();

  title: sortDir;
  metascore: sortDir;
  year: sortDir;
  asc = '▲';
  desc = '▼';


  @Input() set sortedBy(sort: Sort) {
    this.title = null;
    this.metascore = null;
    this.year = null;

    switch (sort.byWhat) {
      case 'title':
        this.title = sort.order;
        break;
      case 'metascore':
        this.metascore = sort.order;
        break;
      case 'year':
        this.year = sort.order;
        break;
    }
  }

  constructor() {}

  ngOnInit() {
  }

  changeSort(sortBy: sortBy) {
    this.sortBy.emit(sortBy);
  }
}
