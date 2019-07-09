import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let tokenReq = req.clone({setHeaders: { 'Content-Type': 'application/json' }});
    if (!req.body) {
      tokenReq = tokenReq.clone({
        setHeaders: { Authorization: this.auth.getToken() }
      });
    }
    return next.handle(tokenReq);
  }
}
