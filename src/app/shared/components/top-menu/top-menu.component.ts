import { UserData } from '../../login/models/login.models';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  isLoggedIn: boolean;
  currentRoute: string;
  userData: UserData;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(isLogged => (this.isLoggedIn = isLogged));
    this.auth.getUserData().subscribe(val => (this.userData = val));
    this.router.events.subscribe(
      event => (this.currentRoute = this.router.url)
    );
  }

  logout($event: boolean) {
    if ($event) {
      this.auth.logout();
    }
  }
}
