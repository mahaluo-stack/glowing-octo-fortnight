import { Component, OnInit } from '@angular/core';
import { FoodDataType, FoodItemType } from '../../../../shared/models';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-food-data',
  templateUrl: './food-data.component.html',
  styleUrls: ['./food-data.component.scss'],
  imports: [CommonModule]
})
export class FoodDataComponent implements OnInit {

  foodItems: Array<FoodItemType> = [];
  foodData: Array<{ [key: string]: Array<FoodDataType> }> = [];

  constructor() { }

  ngOnInit(): void {
    this.foodItems.forEach((item) => {
      this.foodData.push({
        [item.name]: Object.values(item.nutrition)
      })
    })
  }
}
