import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { UserData } from '../../login/models/login.models';
import { AutoUnsubscribe } from '../../shared/autoUnsubscribe.adapter';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent extends AutoUnsubscribe implements OnInit {
  isLoggedIn: boolean;
  currentRoute: string;
  userData: UserData;

  constructor(private auth: AuthService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.subs.sink = this.auth.isLoggedIn().subscribe(isLogged => (this.isLoggedIn = isLogged));
    this.subs.sink = this.auth.getUserData().subscribe(val => (this.userData = val));
    this.subs.sink = this.router.events.subscribe(
      event => (this.currentRoute = this.router.url)
    );
  }

  logout() {
    this.auth.logout();
  }
}
