import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './shared/login.guard';
import { LogInComponent } from './log-in/containers/log-in/log-in.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [LoginGuard],
    component: LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
