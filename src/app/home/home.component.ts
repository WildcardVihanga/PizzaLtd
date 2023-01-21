import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public peopleNum: number = 4;
  public piecePerPerson: number = 3;
  public total: number = 0;
  // private sizes = [5, 7, 10, 15, 24];
  // private prices = [4, 6, 10, 15, 24];
  public totalCostList = [];
  public totalCostForSize1: number = 0;
  public totalCostForSize2: number = 0;
  public totalCostForSize3: number = 0;
  public totalCostForSize4: number = 0;
  public totalCostForSize5: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public calculateTotal(): number{
    this.total = this.peopleNum * this.piecePerPerson;
    return this.total;
  }

  public calculateCost() {
    const pizzaPieces = this.calculateTotal();
    let pizzaCount1 = 0;
    let pizzaCount2 = 0;
    let pizzaCount3 = 0;
    let pizzaCount4 = 0;
    let pizzaCount5 = 0;
    if(pizzaPieces <= 4){
      pizzaCount1 = pizzaPieces/4;
      pizzaCount2 = 1;
      pizzaCount3 = 1;
      pizzaCount4 = 1;
      pizzaCount5 = 1;
    } else if (pizzaPieces <= 6){
      pizzaCount1 = pizzaPieces/4;
      pizzaCount2 = pizzaPieces/6;
      pizzaCount3 = 1;
      pizzaCount4 = 1;
      pizzaCount5 = 1;
    }else if (pizzaPieces <= 10){
      pizzaCount1 = pizzaPieces/4;
      pizzaCount2 = pizzaPieces/6;
      pizzaCount3 = pizzaPieces/10;
      pizzaCount4 = 1;
      pizzaCount5 = 1;
    }else if (pizzaPieces <= 15){
      pizzaCount1 = pizzaPieces/4;
      pizzaCount2 = pizzaPieces/6;
      pizzaCount3 = pizzaPieces/10;
      pizzaCount4 = pizzaPieces/15; 
      pizzaCount5 = 1;
    }else if (pizzaPieces <= 24){
      pizzaCount1 = pizzaPieces/4;
      pizzaCount2 = pizzaPieces/6;
      pizzaCount3 = pizzaPieces/10;
      pizzaCount4 = pizzaPieces/15;
      pizzaCount5 = pizzaPieces/24;
    }
    this.totalCostForSize1 = 3*pizzaCount1;
    this.totalCostForSize2 = 5*pizzaCount2;
    this.totalCostForSize3 = 8*pizzaCount3;
    this.totalCostForSize4 = 12*pizzaCount4;
    this.totalCostForSize5 = 18*pizzaCount5;
  } 

}
