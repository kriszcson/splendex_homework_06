import { Component, OnInit } from '@angular/core';
import { AllCards } from './all-cards';

@Component({
  selector: 'app-actual-game',
  templateUrl: './actual-game.component.html',
  styleUrls: ['./actual-game.component.scss']
})
export class ActualGameComponent implements OnInit {
  cards: AllCards = new AllCards();
  constructor() {
    console.log(this.cards.getCards());
  }

  ngOnInit(): void {
  }

}
