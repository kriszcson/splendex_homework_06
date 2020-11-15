import { Component, Input, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { AllCards } from './all-cards';

@Component({
  selector: 'app-actual-game',
  templateUrl: './actual-game.component.html',
  styleUrls: ['./actual-game.component.scss']
})
export class ActualGameComponent implements OnInit {
  cards: AllCards = new AllCards();
  allCards = this.cards.getCards();
  countOfReveald: number = 0;
  clicks = 0;
  best = 0;
  firstRevealedId = -1;
  secondRevealedId = -1;
  @Input() actualCards: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  startGame() {
    this.clicks = 0;
    this.countOfReveald = 0;
    this.allCards = this.cards.getCards();
    this.hide();
    this.unPair();
  }

  checkClickValidity(id: number) {
    for (let i = 0; i < this.allCards.length; i++) {
      if (!this.allCards[i].isRevealed && !this.allCards[i].isPaired && i === id) {
        this.revealCard(id);
      }
    }
  }
  revealCard(id: number) {
    this.countOfReveald++;
    this.clicks++;
    if (this.countOfReveald === 1) {
      if (this.clicks != 1) {
        this.hide();
      }
      this.revealFirstCard(id);
      this.firstRevealedId = id;
    } else {
      this.revealSecondCard(id);
      this.countOfReveald = 0;
      this.checkFinished();
    }
  }

  revealFirstCard(id: number) {
    this.allCards[id].isRevealed = true;
    this.firstRevealedId = id;
  }

  revealSecondCard(id: number) {
    this.allCards[id].isRevealed = true;
    this.checkPair(id);
  }

  checkPair(id: number) {
    if (this.allCards[id].logoUrl === this.allCards[this.firstRevealedId].logoUrl) {
      this.allCards[id].isPaired = true;
      this.allCards[this.firstRevealedId].isPaired = true;
    }
    this.secondRevealedId = id;
  }

  checkFinished(): void {
    for (let i = 0; i < this.allCards.length; i++) {
      if (this.allCards[i].isPaired === false) {
        return;
      }
    }
    if (this.clicks <= this.best || this.best === 0) {
      this.best = this.clicks;
    }
  }

  hide() {
    for (let i = 0; i < this.allCards.length; i++) {
      this.allCards[i].isRevealed = false;
    }
  }

  unPair() {
    for (let i = 0; i < this.allCards.length; i++) {
      this.allCards[i].isPaired = false;
    }
  }
}