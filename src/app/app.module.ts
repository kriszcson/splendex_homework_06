import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { HeaderComponent } from './header/header.component';
import { ActualGameComponent } from './actual-game/actual-game.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetComponent } from './reset/reset.component';
const appRoutes: Routes = [
  { path: '', component: NewGameComponent },
  { path: 'actual', component: ActualGameComponent },
  { path: 'actual', component: HeaderComponent },
  { path: 'reset', component: ResetComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    HeaderComponent,
    ActualGameComponent,
    ResetComponent
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
