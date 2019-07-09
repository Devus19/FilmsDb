import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-films-count',
  templateUrl: './films-count.component.html',
  styleUrls: ['./films-count.component.scss']
})
export class FilmsCountComponent implements OnInit {
  @Output() setItemsPerPage = new EventEmitter<number>();

  filmCount = new FormGroup({
    filmsNumber: new FormControl('', [Validators.required, Validators.min(3)])
  });

  constructor() {}

  ngOnInit() {}

  handleSubmit() {
    if (this.filmCount.valid) {
      this.setItemsPerPage.emit(this.filmCount.value.filmsNumber);
    }
  }
}
