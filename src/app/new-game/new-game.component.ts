import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})

export class NewGameComponent implements OnInit {
  sizeOfMatch;

  options = [
    { name: "3 Pairs", value: 3 },
    { name: "4 Pairs", value: 4 },
    { name: "5 Pairs", value: 5 },
    { name: "6 Pairs", value: 6 },
    { name: "7 Pairs", value: 7 },
    { name: "8 Pairs", value: 8 },
    { name: "9 Pairs", value: 9 },
    { name: "10 Pairs", value: 10 }
  ]
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.router.navigateByUrl('', { state: this.sizeOfMatch });
  }

  getSize() {
    console.log(this.sizeOfMatch);
  }
}