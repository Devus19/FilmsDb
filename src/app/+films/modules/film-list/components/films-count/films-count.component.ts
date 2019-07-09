import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-films-count',
  templateUrl: './films-count.component.html',
  styleUrls: ['./films-count.component.scss']
})
export class FilmsCountComponent {
  @Output() setItemsPerPage = new EventEmitter<number>();

  filmCount = new FormGroup({
    filmsNumber: new FormControl('', [Validators.required, Validators.min(3)])
  });

  handleSubmit() {
    if (this.filmCount.valid) {
      this.setItemsPerPage.emit(this.filmCount.value.filmsNumber);
    }
  }
}
