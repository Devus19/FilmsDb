import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginData } from 'src/app/shared/models/LoginData.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  @Output() formDataEmitter: EventEmitter<LoginData> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.formDataEmitter.emit(this.loginForm.value);
    }
  }
}
