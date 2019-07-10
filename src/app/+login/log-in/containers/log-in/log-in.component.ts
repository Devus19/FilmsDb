import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { LoginData } from 'src/app/shared/login/models/login.models';

import { Component, OnInit } from '@angular/core';
import { AutoUnsubscribe } from 'src/app/shared/shared/autoUnsubscribe.adapter';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent extends AutoUnsubscribe implements OnInit {
  error$: Observable<string>;
  isLoading: boolean;

  constructor(private auth: AuthService) {
    super();
  }

  ngOnInit() {
    this.error$ = this.auth.getError();
    this.subs.sink = this.auth.getIsSending().subscribe(val => (this.isLoading = val));
  }

  handleSubmit($event: LoginData) {
    this.auth.login($event);
  }
}
