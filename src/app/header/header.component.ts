import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sizeOfMatch: number;
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
  constructor() { }

  ngOnInit(): void {
  }
  getSize() {

  }
}
