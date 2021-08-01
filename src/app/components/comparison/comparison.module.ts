import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComparisonsComponent } from './all-comparisons/all-comparisons.component';
import { AllComparisonsAdminComponent } from './all-comparisons-admin/all-comparisons-admin.component';
import { CreateComparisonComponent } from './create-comparison/create-comparison.component';
import { EditComparisonComponent } from './edit-comparison/edit-comparison.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ComparisonService} from "../../services/comparison.service";


@NgModule({
  declarations: [
    AllComparisonsComponent,
    AllComparisonsAdminComponent,
    CreateComparisonComponent,
    EditComparisonComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'create', component: CreateComparisonComponent},
      {path: 'all', component: AllComparisonsComponent},
      {path: 'all/admin', component: AllComparisonsAdminComponent},
      {path: 'edit/:id', component: EditComparisonComponent},
    ])
  ],

  providers: [
    ComparisonService,
  ]
})
export class ComparisonModule { }
