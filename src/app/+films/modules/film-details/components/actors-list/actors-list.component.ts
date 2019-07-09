import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/shared/films/models/films.models';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent {
  @Input() actors: Actor[];
}
