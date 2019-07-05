import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/log-in-form/login-form.component';
import { LogInComponent } from './containers/log-in/log-in.component';

@NgModule({
  declarations: [LoginFormComponent, LogInComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LogInModule { }
