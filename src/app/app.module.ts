import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { AuthModule } from "./components/auth/auth.module";
import { HomeComponent } from "./components/home/home.component";
import { SloganModule } from "./components/slogan/slogan.module";
import {BlogModule} from "./components/blog/blog.module";
import {MemoryModule} from "./components/memory/memory.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SloganModule,
    BlogModule,
    MemoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
