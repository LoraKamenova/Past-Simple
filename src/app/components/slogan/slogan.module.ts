import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSlogansComponent } from './all-slogans/all-slogans.component';
import { AddSloganComponent } from './add-slogan/add-slogan.component';



@NgModule({
  declarations: [AllSlogansComponent, AddSloganComponent],
  imports: [
    CommonModule
  ]
})
export class SloganModule { }
