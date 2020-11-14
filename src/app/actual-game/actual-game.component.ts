import { Component, OnInit } from '@angular/core';
import { Cards } from '../model/cards';

@Component({
  selector: 'app-actual-game',
  templateUrl: './actual-game.component.html',
  styleUrls: ['./actual-game.component.scss']
})
export class ActualGameComponent implements OnInit {
  cards: Cards[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
