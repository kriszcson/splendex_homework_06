import { Component, Input, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { AllCards } from './all-cards';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-actual-game',
  templateUrl: './actual-game.component.html',
  styleUrls: ['./actual-game.component.scss']
})

export class ActualGameComponent implements OnInit {
  countOfCards;
  cards: AllCards = new AllCards();
  allCards = this.cards.getCards();
  actualCards: AllCards;
  countOfReveald: number = 0;
  clicks = 0;
  tryPairing = 0;
  best = 0;
  firstRevealedId = -1;
  secondRevealedId = -1;

  constructor(public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
      .subscribe(data => {
        this.countOfCards = data.count * 2;
        console.log(this.countOfCards);
      })
    this.getSize();
  }

  getSize() {
    for (let i = 0; i < 20 - this.countOfCards; i++) {
      this.allCards.pop();
    }
    this.allCards = this.shuffleCards(this.allCards);
  }
  startGame() {
    this.tryPairing = 0;
    this.countOfReveald = 0;
    this.allCards = this.shuffleCards(this.allCards);
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
    this.tryPairing++;
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
      this.best = this.tryPairing;
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

  shuffleCards(cards) {
    let currentIndex = cards.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
      cards[randomIndex].isRevealed = false;
    } for (let i = 0; i < cards.length; i++) {
      cards[i].id = i;
    }
    return cards;
  }
}