import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllSlogansComponent} from './all-slogans/all-slogans.component';
import {CreateSloganComponent} from './create-slogan/create-slogan.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AdminSlogansComponent} from './admin-slogans/admin-slogans.component';
import {SloganService} from "./slogan.service";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'create', component: CreateSloganComponent},
      {path: 'all', component: AllSlogansComponent},
      {path: 'all/admin', component: AdminSlogansComponent},
    ])
  ],
  declarations: [
    AllSlogansComponent,
    CreateSloganComponent,
    AdminSlogansComponent
  ],
  providers: [
    SloganService,
  ]
})
export class SloganModule {
}
