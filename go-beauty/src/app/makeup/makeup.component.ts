import { Component, OnInit } from '@angular/core';
import { Prices } from '../prices';
@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {
  pricesCards = new Prices('Икономичен', 'За малки бизнеси и индивидуални групи', '79 лв', 'с ДДС на процедура', 'за 2-4 човека', 'x1 специалист');
  pricesCardsMiddle = new Prices('Стандартен', 'За средни бизнеси и индивидуални групи', '70 лв.', 'с ДДС на процедура', 'за 5+ човека', ' x2 специалист');
  constructor() { }

  ngOnInit() {
  }

}
