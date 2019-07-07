import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessageBoxComponent } from './components/message-box/message-box.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [MessageBoxComponent],
  imports: [CommonModule, WelcomeRoutingModule]
})
export class WelcomeModule {}
