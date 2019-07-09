import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UserData } from 'src/app/shared/models/Login.models';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  @Output() handleLogout: EventEmitter<boolean> = new EventEmitter();
  @Input() isLogged: boolean;
  @Input() currentRoute: string;
  @Input() userData: UserData;

  constructor() {}

  ngOnInit() {}

  logout() {
    this.handleLogout.emit(true);
  }
}
