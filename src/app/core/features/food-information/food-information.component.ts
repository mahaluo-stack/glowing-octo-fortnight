import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DynamicFoodDataComponent } from 'src/app/shared/components/dynamic-food-data/dynamic-food-data.component';
import { FoodDataType } from 'src/app/shared/models';
import { DynamicFoodDataComponentService } from 'src/app/shared/services/dynamic-component.service';

@Component({
  selector: 'app-food-information',
  templateUrl: './food-information.component.html',
  styleUrls: ['./food-information.component.scss']
})
export class FoodInformationComponent implements OnInit {

  constructor(private dynamicFoodDataComponentService: DynamicFoodDataComponentService, private viewContainerRef: ViewContainerRef) {
    this.dynamicFoodDataComponentService.viewContainerRef = this.viewContainerRef;
  }

  ngOnInit(): void {
    this.dynamicFoodDataComponentService.createDynamicComponent(DynamicFoodDataComponent)
      .catch((error: {}) => {
        console.error('Failed to create dynamic component:', error);
      });
  }
}
