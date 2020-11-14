import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})

export class NewGameComponent implements OnInit {
  @Output() sizeOfMatch = new EventEmitter<number>();

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

  ngOnInit(): void {
  }

  getSize() {
    console.log(this.sizeOfMatch);
  }
}