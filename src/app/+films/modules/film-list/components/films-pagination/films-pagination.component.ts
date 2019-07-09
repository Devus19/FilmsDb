import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-films-pagination',
  templateUrl: './films-pagination.component.html',
  styleUrls: ['./films-pagination.component.scss']
})
export class FilmsPaginationComponent implements OnInit {
  @Output() setPage = new EventEmitter<number>();
  @Input() set numberOfPages(value: number) {
    this._numberOfPages = value;
    this.pagesArray = new Array(value)
      .fill('', 0, value)
      .map((val, index) => index + 1);
  }
  @Input() currentPage;
  _numberOfPages: number;
  pagesArray: number[];

  constructor() {}

  ngOnInit() {}

  changePage(page: number | string) {
    const notChangedPage = this.currentPage;
    switch (page) {
      case 'next':
        if (this.currentPage !== this._numberOfPages) {
          this.currentPage++;
        }
        break;
      case 'prev':
        if (this.currentPage !== 1) {
          this.currentPage--;
        }
        break;
      case 'first':
        this.currentPage = 1;
        break;
      case 'last':
        this.currentPage = this._numberOfPages;
        break;
      default:
        this.currentPage = page;
    }
    if (this.currentPage !== notChangedPage) {
      this.setPage.emit(this.currentPage);
    }
  }
}
