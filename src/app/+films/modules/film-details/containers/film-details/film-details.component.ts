import { Component, OnInit } from '@angular/core';
import { FilmsFacadeService } from 'src/app/+films/services/films-facade.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  constructor(private facade: FilmsFacadeService) { }

  ngOnInit() {
    this.facade.loadActors();
    this.facade.getPopulatedFilms().subscribe(
      val => console.log(val)
    )
  }

}
