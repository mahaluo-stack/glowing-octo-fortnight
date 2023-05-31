import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { FoodDataComponent } from 'src/app/core/features/food-information/food-data/food-data.component';
import { FoodCategoryType, FoodItemType } from 'src/app/shared/models';
import { ComponentService, FoodDataService } from 'src/app/shared/services';

@Component({
  selector: 'app-food-information',
  templateUrl: './food-information.component.html',
  styleUrls: ['./food-information.component.scss']
})
export class FoodInformationComponent implements OnInit {

  @ViewChild('foodDataContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;
  categories: Array<FoodCategoryType> = [];
  foodItems: Array<FoodItemType> = [];

  constructor(private componentService: ComponentService, private viewContainerRef: ViewContainerRef, private foodDataService: FoodDataService) {
    this.componentService.viewContainerRef = this.viewContainerRef;
  }

  ngOnInit(): void {
    const categories$ = this.foodDataService.getCategoryNames();
    firstValueFrom(categories$)
      .then((foodCategories) => { this.categories = foodCategories; })
      .catch((error: {}) => { console.error('Failed to create dynamic component:', error); });
  }

  handleOpenCategory(category: string): void {
    const foodItems$ = this.foodDataService.getCategoryItems(category);
    firstValueFrom(foodItems$)
      .then((foodItems) => { this.createDataComponent(foodItems); })
      .catch((error: {}) => { console.error('Failed to create dynamic component:', error); });
  }

  createDataComponent(foodItems: Array<FoodItemType>): void {
    this.componentService.createDynamicComponent(FoodDataComponent)
      .then((res) => { res.instance.foodItems = foodItems; })
      .catch((error: {}) => { console.error('Failed to create dynamic component:', error); });
  }
}
