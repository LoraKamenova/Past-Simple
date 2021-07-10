import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueCategoriesComponent } from './venue-categories/venue-categories.component';
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [VenueCategoriesComponent],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})
export class VenueModule { }
