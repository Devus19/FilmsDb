import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import {
    TopMenuContainerComponent
} from './containers/top-menu-container/top-menu-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    TopMenuContainerComponent,
    PageNotFoundComponent,
    TopMenuContainerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
