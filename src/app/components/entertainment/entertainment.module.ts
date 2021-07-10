import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntertainmentCategoriesComponent } from './entertainment-categories/entertainment-categories.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [EntertainmentCategoriesComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class EntertainmentModule { }
