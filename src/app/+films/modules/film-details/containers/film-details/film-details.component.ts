import { switchMap } from 'rxjs/operators';
import { FilmsFacadeService } from 'src/app/+films/shared/films-facade.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor, Film } from 'src/app/shared/films/models/films.models';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  actors: Actor[];
  film: Partial<Film>;

  constructor(
    private facade: FilmsFacadeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.facade.loadFilms();
    this.facade.loadActors();
    this.route.params
      .pipe(switchMap(val => this.facade.getPopulatedFilm(val.id)))
      .subscribe(val => {
        let actors, film;
        if (!!val) {
          ({ actors, ...film } = val);
        }
        this.actors = actors;
        this.film = film;
      });
  }
}
