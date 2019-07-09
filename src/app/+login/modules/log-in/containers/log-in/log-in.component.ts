import { Observable } from 'rxjs';
import { LoginData } from 'src/app/shared/login/models/login.models';
import { AuthService } from 'src/app/shared/auth/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  error$: Observable<string>;
  isLoading: boolean;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.error$ = this.auth.getError();
    this.auth.getIsSending().subscribe(val => (this.isLoading = val));
  }

  handleSubmit($event: LoginData) {
    this.auth.login($event);
  }
}
