import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessageBoxComponent } from './components/message-box/message-box.component';
import { WelcomeGuard } from './shared/welcome.guard';

const routes: Routes = [
  { path: '', canActivate: [WelcomeGuard], component: MessageBoxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {}
