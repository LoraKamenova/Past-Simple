import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {IndexComponent} from "./components/index/index.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {AllSlogansComponent} from "./components/slogan/all-slogans/all-slogans.component";
import {BlogPostsComponent} from "./components/blog/blog-posts/blog-posts.component";
import {AllMemoriesComponent} from "./components/memory/all-memories/all-memories.component";
import {MyProfileComponent} from "./components/profile/my-profile/my-profile.component";
import {QuizComponent} from "./components/quiz/quiz/quiz.component";
import {PlacesComponent} from "./components/places/places.component";
import {AllComparisonsComponent} from "./components/comparison/all-comparisons/all-comparisons.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: IndexComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'all-slogans', component: AllSlogansComponent},
  {path: 'blog-posts', component: BlogPostsComponent},
  {path: 'all-memories', component: AllMemoriesComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'all-comparisons', component: AllComparisonsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
