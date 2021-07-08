import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {IndexComponent} from "./components/index/index.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
