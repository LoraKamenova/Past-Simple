import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueCategoriesComponent } from './venue-categories/venue-categories.component';
import {AppRoutingModule} from "../../app-routing.module";
import { CafeAlbumComponent } from './cafe-album/cafe-album.component';



@NgModule({
  declarations: [VenueCategoriesComponent, CafeAlbumComponent],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})
export class VenueModule { }
