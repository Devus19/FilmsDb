import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActorsListComponent } from './components/actors-list/actors-list.component';
import { FilmSpecificsComponent } from './components/film-specifics/film-specifics.component';
import { FilmDetailsComponent } from './containers/film-details/film-details.component';

@NgModule({
  declarations: [
    ActorsListComponent,
    FilmSpecificsComponent,
    FilmDetailsComponent
  ],
  imports: [CommonModule]
})
export class FilmDetailsModule {}
