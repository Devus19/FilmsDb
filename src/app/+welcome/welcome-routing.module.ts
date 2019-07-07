import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessageBoxComponent } from './components/message-box/message-box.component';

const routes: Routes = [
  { path: '', component: MessageBoxComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
