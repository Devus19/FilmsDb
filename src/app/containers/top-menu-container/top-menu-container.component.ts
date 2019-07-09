import { AuthService } from 'src/app/shared/services/auth.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/shared/models/Login.models';

@Component({
  selector: 'app-top-menu-container',
  templateUrl: './top-menu-container.component.html',
  styleUrls: ['./top-menu-container.component.scss']
})
export class TopMenuContainerComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  currentRoute: string;
  userData: UserData;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(isLogged => (this.isLoggedIn = isLogged));
    this.auth.getUserData().subscribe(
      val => this.userData = val
    );
    this.router.events.subscribe(
      event => (this.currentRoute = this.router.url)
    );
  }

  ngOnDestroy() {}

  logout($event: boolean) {
    if ($event) {
      this.auth.logout();
    }
  }
}
