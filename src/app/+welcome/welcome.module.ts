import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { MessageBoxComponent } from './components/message-box/message-box.component';

@NgModule({
  declarations: [MessageBoxComponent],
  imports: [CommonModule, WelcomeRoutingModule]
})
export class WelcomeModule {}
