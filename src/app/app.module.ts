import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from './app-routing.module';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from "@angular/forms";

import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptorService} from "./interceptors/jwt-interceptor.service";
import {ResponseHandlerInterceptorService} from "./interceptors/response-handler-interceptor.service";

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/shared/navigation/navigation/navigation.component';
import {FooterComponent} from './components/shared/footer/footer/footer.component';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from './components/about/about.component';
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";

import {SignupComponent} from "./components/authentication/signup/signup.component";
import {SigninComponent} from "./components/authentication/signin/signin.component";

import {MemoryModule} from "./components/memory/memory.module";
import {SloganModule} from "./components/slogan/slogan.module";
import {ComparisonModule} from "./components/comparison/comparison.module";
import {PostModule} from "./components/post/post.module";
import {CategoriesModule} from "./components/categories/categories.module";
import {AlbumsModule} from "./components/albums/albums.module";
import {PictureModule} from "./components/picture/picture.module";
import {MyProfileComponent} from "./components/profile/my-profile/my-profile.component";
import {QuizModule} from "./components/quiz/quiz.module";

import {AuthService} from "./services/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    SigninComponent,
    AdminPanelComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MemoryModule,
    SloganModule,
    ComparisonModule,
    PostModule,
    CategoriesModule,
    AlbumsModule,
    PictureModule,
    QuizModule,
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
