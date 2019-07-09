import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { AuthService } from '../../shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canLoad() {
    if (!!this.auth.getToken()) {
      this.router.navigate(['/films/1']);
      return false;
    }
    return true;
  }
}
