import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './places/places.component';
import { SeaCategoriesComponent } from './sea-categories/sea-categories.component';



@NgModule({
  declarations: [PlacesComponent, SeaCategoriesComponent],
  imports: [
    CommonModule
  ]
})
export class PlacesModule { }
