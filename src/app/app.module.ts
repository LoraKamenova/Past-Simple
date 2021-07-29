import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation/navigation.component';
import {FooterComponent} from './components/footer/footer/footer.component';
import {AuthModule} from "./components/auth/auth.module";
import {HomeComponent} from "./components/home/home.component";
import {SloganModule} from "./components/slogan/slogan.module";
import {BlogModule} from "./components/blog/blog.module";
import {MemoryModule} from "./components/memory/memory.module";
import {ProfileModule} from "./components/profile/profile.module";
import {QuizModule} from "./components/quiz/quiz.module";
import {AdminPanelModule} from "./components/admin-panel/admin-panel.module";
import {EntertainmentModule} from "./components/entertainment/entertainment.module";
import {TravelModule} from "./components/travel/travel.module";
import {VenueModule} from "./components/venue/venue.module";
import {PlacesComponent} from "./components/places/places.component";
import { AboutComponent } from './components/about/about.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from 'ngx-toastr';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptorService} from "./interceptors/jwt-interceptor.service";
import {ResponseHandlerInterceptorService} from "./interceptors/response-handler-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    PlacesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    AdminPanelModule,
    AuthModule,
    BlogModule,
    EntertainmentModule,
    MemoryModule,
    ProfileModule,
    QuizModule,
    SloganModule,
    TravelModule,
    VenueModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
