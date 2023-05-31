import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FoodCategoryType, FoodItemType } from 'src/app/shared/models';

@Component({
  selector: 'food-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  @Input() categories: Array<FoodCategoryType> = [];
  @Input() foodItems: Array<FoodItemType> = [];
  @Output() openCategoryEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  openCategory(category: string): void {
    this.openCategoryEvent.emit(category);
  }
}