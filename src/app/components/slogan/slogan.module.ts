import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllSlogansComponent} from './all-slogans/all-slogans.component';
import {CreateSloganComponent} from './create-slogan/create-slogan.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AllSlogansAdminComponent} from './all-slogans-admin/all-slogans-admin.component';
import {SloganService} from "./slogan.service";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'create', component: CreateSloganComponent},
      {path: 'all', component: AllSlogansComponent},
      {path: 'all/admin', component: AllSlogansAdminComponent},
    ])
  ],
  declarations: [
    AllSlogansComponent,
    CreateSloganComponent,
    AllSlogansAdminComponent
  ],
  providers: [
    SloganService,
  ]
})
export class SloganModule {
}
