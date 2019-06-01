import { Component, OnInit } from '@angular/core';
import { Prices } from '../prices';
@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.css']
})
export class MassageComponent implements OnInit {
  pricesCards = new Prices('Икономичен', 'За малки бизнеси и индивидуални групи', '16 лв', 'с ДДС на процедура', 'за 6+ човека', 'x1 специалист');
  pricesCardsMiddle = new Prices('Стандартен', 'За средни бизнеси и индивидуални групи', '12 лв.', 'с ДДС на процедура', 'за 11 човека', ' x2 специалист');
  pricesCardsLeft = new Prices('Бизнес', 'За големи бизнеси и индивидуални групи', '10 лв.', 'с ДДС на процедура', 'за 20 човека', ' x3 специалист');
  constructor() { }

  ngOnInit() {
  }

}
