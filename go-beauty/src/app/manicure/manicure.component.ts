import { Component, OnInit } from '@angular/core';
import { Prices } from '../prices';
@Component({
  selector: 'app-manicure',
  templateUrl: './manicure.component.html',
  styleUrls: ['./manicure.component.css']
})
export class ManicureComponent implements OnInit {
  pricesCards = new Prices('Експрес', '', '20 лв', 'с ДДС на процедура', 'за 5+ човека', 'Маникюр класически', '30 минути');
  pricesCardsMiddle = new Prices('Стандартен', '', '35 лв', 'с ДДС на процедура', 'за 5+ човека', 'Маникюр с гел лак', '60 минути');
  pricesCardsLeft = new Prices('Премиум', '', '29 лв.', 'с ДДС на процедура', 'за 8+ човека', 'Маникюр с гел лак', '60 минути');
  constructor() { }

  ngOnInit() {
  }

}
