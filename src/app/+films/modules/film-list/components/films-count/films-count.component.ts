import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-films-count',
  templateUrl: './films-count.component.html',
  styleUrls: ['./films-count.component.scss']
})
export class FilmsCountComponent {
  @Output() setItemsPerPage = new EventEmitter<number>();

  setItems(num: any) {
      this.setItemsPerPage.emit(num.target.value);
  }
}
