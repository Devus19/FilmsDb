import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from '../auth/token-interceptor.service';
import {
  HttpClientModule,
  HttpClient,
  HttpHandler
} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('TokenInterceptorService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpClientModule, HttpClient, HttpHandler],
      imports: [RouterTestingModule]
    })
  );

  it('should be created', () => {
    const service: TokenInterceptorService = TestBed.get(
      TokenInterceptorService
    );
    expect(service).toBeTruthy();
  });
});
