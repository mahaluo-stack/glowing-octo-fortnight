import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodInformationComponent } from './core/features/food-information/food-information.component';

const routes: Routes = [
  {
    path: '',
    component: FoodInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
