import { Film, Actor } from 'src/app/shared/films/models/films.models';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-specifics',
  templateUrl: './film-specifics.component.html',
  styleUrls: ['./film-specifics.component.scss']
})
export class FilmSpecificsComponent {
  @Input() film: Partial<Film>;
  @Input() actors: Actor[];
}
