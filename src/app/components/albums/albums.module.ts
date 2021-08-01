import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {SeaComponent} from './sea/sea.component';
import {MountainComponent} from './mountain/mountain.component';
import {SpaComponent} from './spa/spa.component';
import {CampingComponent} from './camping/camping.component';
import {HotelsComponent} from './hotels/hotels.component';
import {TownsComponent} from './towns/towns.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {PubsComponent} from './pubs/pubs.component';
import {CafeComponent} from './cafe/cafe.component';
import {CinemaComponent} from './cinema/cinema.component';
import {MediaComponent} from './media/media.component';
import {OtherEntertainmentComponent} from './other-entertainment/other-entertainment.component';



@NgModule({
  declarations: [
    SeaComponent,
    MountainComponent,
    SpaComponent,
    CampingComponent,
    HotelsComponent,
    TownsComponent,
    RestaurantsComponent,
    PubsComponent,
    CafeComponent,
    CinemaComponent,
    MediaComponent,
    OtherEntertainmentComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'sea', component: SeaComponent},
      {path: 'mountain', component: MountainComponent},
      {path: 'spa', component: SpaComponent},
      {path: 'camping', component: CampingComponent},
      {path: 'hotels', component: HotelsComponent},
      {path: 'towns', component: TownsComponent},
      {path: 'restaurants', component: RestaurantsComponent},
      {path: 'pubs', component: PubsComponent},
      {path: 'cafe', component: CafeComponent},
      {path: 'cinema', component: CinemaComponent},
      {path: 'media', component: MediaComponent},
      {path: 'other-entertainment', component: OtherEntertainmentComponent},
    ])
  ]
})

export class AlbumsModule {
}
