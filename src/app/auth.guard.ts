import { Injectable } from '@angular/core';
import {
  Router,
  CanLoad
} from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canLoad() {
    if (!!this.auth.getToken()) {
      this.router.navigate(['films/1']);
      return false;
    }
    return true;
  }
}
