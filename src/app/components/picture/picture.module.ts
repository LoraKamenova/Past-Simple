import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreatePictureComponent} from './create-picture/create-picture.component';
import {EditPictureComponent} from './edit-picture/edit-picture.component';
import {PictureDetailsComponent} from './picture-details/picture-details.component';
import {RouterModule} from "@angular/router";
import {AllPicturesAdminComponent} from "./all-pictures-admin/all-pictures-admin.component";
import {PictureService} from "../../services/picture.service";
import {ReactiveFormsModule} from "@angular/forms";
import { AllPicturesSeaAdminComponent } from './all-pictures-sea-admin/all-pictures-sea-admin.component';
import { AllPicturesMountainAdminComponent } from './all-pictures-mountain-admin/all-pictures-mountain-admin.component';
import { AllPicturesSpaAdminComponent } from './all-pictures-spa-admin/all-pictures-spa-admin.component';
import { AllPicturesCampingComponent } from './all-pictures-camping/all-pictures-camping.component';
import { AllPicturesHotelsAdminComponent } from './all-pictures-hotels-admin/all-pictures-hotels-admin.component';


@NgModule({
  declarations: [
    CreatePictureComponent,
    EditPictureComponent,
    PictureDetailsComponent,
    AllPicturesAdminComponent,
    AllPicturesSeaAdminComponent,
    AllPicturesMountainAdminComponent,
    AllPicturesSpaAdminComponent,
    AllPicturesCampingComponent,
    AllPicturesHotelsAdminComponent,
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'create', component: CreatePictureComponent},
      {path: 'all/admin', component: AllPicturesAdminComponent},
      {path: 'all/sea/admin', component: AllPicturesSeaAdminComponent},
      {path: 'all/mountain/admin', component: AllPicturesMountainAdminComponent},
      {path: 'all/spa/admin', component: AllPicturesSpaAdminComponent},
      {path: 'all/camping/admin', component: AllPicturesCampingComponent},
      {path: 'all/hotels/admin', component: AllPicturesAdminComponent},
      {path: 'all/towns/admin', component: AllPicturesAdminComponent},
      {path: 'all/restaurants/admin', component: AllPicturesAdminComponent},
      {path: 'all/cafe/admin', component: AllPicturesAdminComponent},
      {path: 'all/pubs/admin', component: AllPicturesAdminComponent},
      {path: 'all/cinema/admin', component: AllPicturesAdminComponent},
      {path: 'all/media/admin', component: AllPicturesAdminComponent},
      {path: 'all/other-entertainment/admin', component: AllPicturesAdminComponent},
      {path: 'details/:id', component: PictureDetailsComponent},
      {path: 'edit/:id', component: EditPictureComponent},
    ]),
  ],

  providers: [
    PictureService,
  ]
})
export class PictureModule {
}
