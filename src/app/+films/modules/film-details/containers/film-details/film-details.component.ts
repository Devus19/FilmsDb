import { switchMap } from 'rxjs/operators';
import { FilmsFacadeService } from 'src/app/+films/shared/films-facade.service';
import {
  Actor,
  Film,
  FilmPopulated
} from 'src/app/shared/films/models/films.models';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoUnsubscribe } from 'src/app/shared/shared/autoUnsubscribe.adapter';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent extends AutoUnsubscribe implements OnInit {
  actors: Actor[];
  film: Partial<Film>;

  constructor(
    private facade: FilmsFacadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.facade.loadFilms();
    this.facade.loadActors();
    this.subs.sink = this.route.params
      .pipe(switchMap(val => this.facade.getPopulatedFilm(val.id)))
      .subscribe((val: FilmPopulated) => {
        if (!val) {
          return;
        } else {
          const { actors, ...film } = val;
          this.actors = actors;
          this.film = film;
        }
      });
  }

  goBack() {
    this.router.navigate(['films/1']);
  }
}
