import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sizeOfMatch;
  options = [
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6 ", value: 6 },
    { name: "7 ", value: 7 },
    { name: "8 ", value: 8 },
    { name: "9 ", value: 9 },
    { name: "10 ", value: 10 }
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('', { state: this.sizeOfMatch });
  }
  getSize() {

  }
}
