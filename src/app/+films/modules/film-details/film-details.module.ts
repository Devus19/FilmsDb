import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilmSpecificsComponent } from './components/film-specifics/film-specifics.component';
import { FilmDetailsComponent } from './containers/film-details/film-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FilmSpecificsComponent, FilmDetailsComponent],
  imports: [CommonModule, SharedModule]
})
export class FilmDetailsModule {}
