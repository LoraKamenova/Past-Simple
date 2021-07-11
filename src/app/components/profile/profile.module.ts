import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyMemoriesComponent } from './my-memories/my-memories.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [MyProfileComponent, MyMemoriesComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProfileModule { }
