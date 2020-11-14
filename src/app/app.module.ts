import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { HeaderComponent } from './header/header.component';
import { ActualGameComponent } from './actual-game/actual-game.component';
import { FormsModule } from '@angular/forms'
const appRoutes: Routes = [
  { path: '', component: NewGameComponent },
  { path: 'actual', component: ActualGameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    HeaderComponent,
    ActualGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
