import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMemoriesComponent } from './all-memories/all-memories.component';
import { AddMemoryComponent } from './add-memory/add-memory.component';



@NgModule({
  declarations: [AllMemoriesComponent, AddMemoryComponent],
  imports: [
    CommonModule
  ]
})
export class MemoryModule { }
