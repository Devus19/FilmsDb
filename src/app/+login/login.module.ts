import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LogInModule } from './modules/log-in/log-in.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LogInModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
