import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginData, LoginResponse } from '../models/Login.models';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://marblejs-example.herokuapp.com/api/v1/auth/login';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient, private router: Router) {}

  private isLogged$ = new BehaviorSubject<boolean>(false);
  private error$ = new BehaviorSubject<string>('');

  login(loginData: LoginData) {
    this.http
      .post(this.loginUrl, JSON.stringify(loginData), {
        headers: this.httpHeaders
      })
      .subscribe(
        (res: LoginResponse) => {
          window.sessionStorage.setItem('token', res.token);
          this.isLogged$.next(true);
        },
        err => catchError(this.handleError(err)),
        () => {
          this.router.navigate(['films'])
          this.error$.next('');
        }
      );
  }

  handleError(err) {
    this.error$.next(err.statusText);
    return err;
  }

  getError() {
    return this.error$.asObservable();
  }

  logout() {
    window.sessionStorage.removeItem('token');
    this.isLogged$.next(false);
    this.router.navigate(['login']);
  }

  getToken() {
    return window.sessionStorage.getItem('token');
  }

  isLoggedIn() {
    this.isLogged$.next(!!window.sessionStorage.getItem('token'));
    return this.isLogged$.asObservable();
  }
}
