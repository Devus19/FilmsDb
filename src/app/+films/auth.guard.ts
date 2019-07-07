import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (!this.auth.getToken()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  canActivateChild() {
    if (!this.auth.getToken()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
