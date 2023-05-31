import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodCategoryType, FoodItemType } from '../models';
import { CATEGORIES, BEVERAGES, DAIRY_PRODUCTS, FRUITS, GRAINS_AND_CEREALS, LEGUMES, MEAT_AND_POULTRY, SEAFOOD, VEGETABLES } from '../../../assets/json/foods';

const CATEGORY_ITEMS: { [key: string]: Array<FoodItemType> } = {
  ['beverages']: BEVERAGES,
  ['dairy products']: DAIRY_PRODUCTS,
  ['fruits']: FRUITS,
  ['grains and cereals']: GRAINS_AND_CEREALS,
  ['legumes']: LEGUMES,
  ['meat and poultry']: MEAT_AND_POULTRY,
  ['seafood']: SEAFOOD,
  ['vegetables']: VEGETABLES
}

@Injectable()
export class FoodDataService {
  constructor() { }

  getCategoryNames(): Observable<Array<FoodCategoryType>> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(CATEGORIES);
        observer.complete();
      }, 1000);
    });
  }

  getCategoryItems(categoryName: string): Observable<Array<FoodItemType>> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(CATEGORY_ITEMS[categoryName.toLocaleLowerCase()]);
        observer.complete();
      }, 1000);
    });
  }
}
