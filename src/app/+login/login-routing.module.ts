import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './modules/log-in/containers/log-in/log-in.component';
import { LoginGuard } from './shared/login.guard';

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
