import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllMemoriesComponent} from './all-memories/all-memories.component';
import {CreateMemoryComponent} from './create-memory/create-memory.component';
import {RouterModule} from "@angular/router";
import {MemoryDetailsComponent} from './memory-details/memory-details.component';
import {MemoriesUserComponent} from "./memories-user/memories-user.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MemoryService} from "../../services/memory.service";
import { AllMemoriesAdminComponent } from './all-memories-admin/all-memories-admin.component';
import { EditMemoryComponent } from './edit-memory/edit-memory.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'create', component: CreateMemoryComponent},
      {path: 'all', component: AllMemoriesComponent},
      {path: 'all/admin', component: AllMemoriesAdminComponent},
      {path: 'details/:id', component: MemoryDetailsComponent},
      {path: 'edit/:id', component: EditMemoryComponent},
      {path: 'user', component: MemoriesUserComponent}
    ])
  ],
  declarations: [
    AllMemoriesComponent,
    CreateMemoryComponent,
    MemoryDetailsComponent,
    MemoriesUserComponent,
    AllMemoriesAdminComponent,
    EditMemoryComponent
  ],
  providers: [
    MemoryService,
  ]
})
export class MemoryModule {
}
