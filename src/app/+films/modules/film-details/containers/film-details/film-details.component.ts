import { switchMap } from 'rxjs/operators';
import { FilmsFacadeService } from 'src/app/+films/shared/services/films-facade.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  constructor(
    private facade: FilmsFacadeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.facade.loadActors();
    this.route.params
      .pipe(switchMap(val => this.facade.getPopulatedFilm(val.id)))
      .subscribe(elo => console.log(elo));
  }
}
