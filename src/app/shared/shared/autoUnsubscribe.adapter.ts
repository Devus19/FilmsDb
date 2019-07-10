import { OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

export class AutoUnsubscribe implements OnDestroy {
  subs = new SubSink();

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
