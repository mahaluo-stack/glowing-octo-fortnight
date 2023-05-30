import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodInformationComponent } from './food-information/food-information.component';
import { DynamicFoodDataComponentService } from 'src/app/shared/services/dynamic-component.service';

@NgModule({
    declarations: [FoodInformationComponent],
    exports: [FoodInformationComponent],
    imports: [CommonModule],
    providers: [DynamicFoodDataComponentService]
})
export class FoodInformationModule { }
