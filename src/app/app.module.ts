import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { HeaderComponent } from './header/header.component';
import { ActualGameComponent } from './actual-game/actual-game.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    HeaderComponent,
    ActualGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
