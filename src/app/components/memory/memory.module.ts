import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMemoriesComponent } from './all-memories/all-memories.component';
import { AddMemoryComponent } from './add-memory/add-memory.component';
import {RouterModule} from "@angular/router";
import { MemoryComponent } from './memory/memory.component';
import {MyMemoriesComponent} from "./my-memories/my-memories.component";



@NgModule({
  declarations: [AllMemoriesComponent, AddMemoryComponent, MemoryComponent, MyMemoriesComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class MemoryModule { }
