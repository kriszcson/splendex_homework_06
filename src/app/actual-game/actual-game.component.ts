import { Component, Input, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { AllCards } from './all-cards';

@Component({
  selector: 'app-actual-game',
  templateUrl: './actual-game.component.html',
  styleUrls: ['./actual-game.component.scss']
})
export class ActualGameComponent implements OnInit {
  getCards: AllCards = new AllCards();
  allCards = this.getCards.getCards();
  countOfReveald: number = 0;
  clicks = 0;
  tempId: number;
  bestValue = 0;
  @Input() actualCards: number;

  constructor() {
    this.startGame();
  }

  ngOnInit(): void {
  }

  startGame() {
    this.shuffleCards(this.allCards);
    this.clicks = 0;
    this.countOfReveald = 0;
  }

  checkClickValidity(id: number) {
    for (let i = 0; i < this.allCards.length; i++) {
      if (this.allCards[i].id === id && !this.allCards[i].isRevealed && !this.allCards[i].isPaired) {
        this.revealCard(id);
      }
    }
  }
  revealCard(id: number) {
    this.clicks++;
    for (let i = 0; i < this.allCards.length; i++) {
      if (this.allCards[i].id === id) {
        this.allCards[i].isRevealed = true;
        this.countOfReveald++;
        if (this.countOfReveald === 1) {
          this.tempId = id;
        }
        else {
          this.hide(id);
        }
      }
      if ((this.allCards[i].logoUrl === this.allCards[id].logoUrl)
        && i != id && this.allCards[i].isRevealed) {
        this.allCards[i].isPaired = true;
        this.allCards[id].isPaired = true;
      }
    }
  }

  hide(id: number) {
    for (let i = 0; i < this.allCards.length; i++) {
      if (i != id) {
        this.allCards[i].isRevealed = false;
      }
      console.log(this.allCards[this.tempId].isRevealed);
      this.countOfReveald = 0;
    }
  }
  wait(ms) {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  shuffleCards(cards) {
    let currentIndex = cards.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
      cards[randomIndex].isRevealed = false;
    }
    return cards;
  }
}
