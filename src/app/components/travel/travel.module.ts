import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelCategoriesComponent } from './travel-categories/travel-categories.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [TravelCategoriesComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TravelModule { }
