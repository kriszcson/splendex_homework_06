import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  sizeOfMatch;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
      .subscribe(data => {
        console.log('data', data);
        this.sizeOfMatch = data.getCount;
        console.log(this.sizeOfMatch);
      })

  }
} 