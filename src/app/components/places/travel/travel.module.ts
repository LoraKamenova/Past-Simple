import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelCategoriesComponent } from './travel-categories/travel-categories.component';
import { SeaCategotiesComponent } from './sea-categoties/sea-categoties.component';
import { SeaCategoriesComponent } from './sea-categories/sea-categories.component';



@NgModule({
  declarations: [TravelCategoriesComponent, SeaCategotiesComponent, SeaCategoriesComponent],
  imports: [
    CommonModule
  ]
})
export class TravelModule { }
