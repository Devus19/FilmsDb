import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class WelcomeGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate() {
    if (!!this.auth.getToken()) {
      this.router.navigate(['/films/1']);
      return false;
    }
    return true;
  }
}
