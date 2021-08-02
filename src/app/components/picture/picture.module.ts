import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreatePictureComponent} from './create-picture/create-picture.component';
import {EditPictureComponent} from './edit-picture/edit-picture.component';
import {PictureDetailsComponent} from './picture-details/picture-details.component';
import {RouterModule} from "@angular/router";
import {AllPicturesAdminComponent} from "./all-pictures-admin/all-pictures-admin.component";
import {PictureService} from "../../services/picture.service";


@NgModule({
  declarations: [
    CreatePictureComponent,
    EditPictureComponent,
    PictureDetailsComponent,
    AllPicturesAdminComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'create', component: CreatePictureComponent},
      {path: 'all/admin', component: AllPicturesAdminComponent},
      {path: 'details/:id', component: PictureDetailsComponent},
      {path: 'edit/:id', component: EditPictureComponent},
    ])
  ],

  providers: [
    PictureService,
  ]
})
export class PictureModule {
}
