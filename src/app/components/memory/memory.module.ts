import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMemoriesComponent } from './all-memories/all-memories.component';
import { CreateMemoryComponent } from './create-memory/create-memory.component';
import {RouterModule} from "@angular/router";
import { MemoryComponent } from './memory/memory.component';
import {MyMemoriesComponent} from "./my-memories/my-memories.component";



@NgModule({
  declarations: [AllMemoriesComponent, CreateMemoryComponent, MemoryComponent, MyMemoriesComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class MemoryModule { }
