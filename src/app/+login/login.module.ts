import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
