import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button
    class="btn"
    [ngClass]="{
      'btn-transparent': transparent,
      'small': small
    }"
  >
  <ng-content></ng-content>
  </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent  {
  @Input() transparent = false;
  @Input() small = false;
}
