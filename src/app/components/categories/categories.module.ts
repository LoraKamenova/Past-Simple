import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {TravelCategoriesComponent} from './travel-categories/travel-categories.component';
import {MainCategoriesComponent} from "./main-categories/main-categories.component";
import {VenueCategoriesComponent} from "./venue-categories/venue-categories.component";
import {EntertainmentCategoriesComponent} from "./entertainment-categories/entertainment-categories.component";


@NgModule({
  declarations: [
    MainCategoriesComponent,
    TravelCategoriesComponent,
    VenueCategoriesComponent,
    EntertainmentCategoriesComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'main', component: MainCategoriesComponent},
      {path: 'travel', component: TravelCategoriesComponent},
      {path: 'venue', component: VenueCategoriesComponent},
      {path: 'entertainment', component: EntertainmentCategoriesComponent},
    ])
  ]
})

export class CategoriesModule {
}
