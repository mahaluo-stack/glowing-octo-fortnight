import { Component, Input } from '@angular/core';
import { FoodDataType } from '../../models';

@Component({
  selector: 'app-dynamic-food-data',
  templateUrl: './dynamic-food-data.component.html',
  styleUrls: ['./dynamic-food-data.component.scss']
})
export class DynamicFoodDataComponent {

  @Input() foodData: FoodDataType | null = null;

}
