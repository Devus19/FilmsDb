import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './log-in/components/log-in-form/login-form.component';
import { LogInComponent } from './log-in/containers/log-in/log-in.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginFormComponent, LogInComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { }
