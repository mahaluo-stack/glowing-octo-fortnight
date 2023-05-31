import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodInformationComponent } from './food-information/food-information.component';
import { CategoryListComponent } from './food-information/category-list/category-list/category-list.component';
import { FoodDataService, ComponentService } from 'src/app/shared/services';

@NgModule({
    declarations: [FoodInformationComponent, CategoryListComponent],
    exports: [],
    imports: [CommonModule],
    providers: [ComponentService, FoodDataService]
})
export class FoodInformationModule { }
