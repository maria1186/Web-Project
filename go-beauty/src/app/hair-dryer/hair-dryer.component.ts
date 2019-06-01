import { Component, OnInit } from '@angular/core';
import { Prices } from '../prices';
@Component({
  selector: 'app-hair-dryer',
  templateUrl: './hair-dryer.component.html',
  styleUrls: ['./hair-dryer.component.css']
})
export class HairDryerComponent implements OnInit {
  pricesCards = new Prices('Икономичен', 'За малки бизнеси и индивидуални групи', '35 лв', 'с ДДС на процедура', 'за 2-4 човека', 'x1 специалист');
  pricesCardsMiddle = new Prices('Стандартен', 'За средни бизнеси и индивидуални групи', '29 лв.', 'с ДДС на процедура', 'за 5+ човека', ' x1 специалист');
  pricesCardsLeft = new Prices('Премиум', 'За големи бизнеси и индивидуални групи', '25 лв.', 'с ДДС на процедура', 'за 10+ човека', ' x2 специалист');
  constructor() { }

  ngOnInit() {
  }

}
