import { Component, Input } from '@angular/core';
import { Film } from 'src/app/shared/films/models/films.models';

@Component({
  selector: 'app-film-specifics',
  templateUrl: './film-specifics.component.html',
  styleUrls: ['./film-specifics.component.scss']
})
export class FilmSpecificsComponent {
  @Input() film: Partial<Film>;
}
