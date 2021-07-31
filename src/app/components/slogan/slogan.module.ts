import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllSlogansComponent} from './all-slogans/all-slogans.component';
import {CreateSloganComponent} from './create-slogan/create-slogan.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AllSlogansAdminComponent} from './all-slogans-admin/all-slogans-admin.component';
import {SloganService} from "./slogan.service";
import { EditSloganComponent } from './edit-slogan/edit-slogan.component';


@NgModule({
  declarations: [
    AllSlogansComponent,
    CreateSloganComponent,
    AllSlogansAdminComponent,
    EditSloganComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'create', component: CreateSloganComponent},
      {path: 'all', component: AllSlogansComponent},
      {path: 'all/admin', component: AllSlogansAdminComponent},
      {path: 'edit/:id', component: EditSloganComponent},
    ])
  ],

  providers: [
    SloganService,
  ]
})
export class SloganModule {
}
