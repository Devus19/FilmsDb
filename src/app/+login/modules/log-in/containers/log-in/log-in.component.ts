import { LoginData } from 'src/app/shared/models/Login.models';
import { AuthService } from 'src/app/shared/services/auth.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

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
