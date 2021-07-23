import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {IndexComponent} from "./components/index/index.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {AllSlogansComponent} from "./components/slogan/all-slogans/all-slogans.component";
import {BlogPostsComponent} from "./components/blog/all-posts/blog-posts.component";
import {AllMemoriesComponent} from "./components/memory/all-memories/all-memories.component";
import {MyProfileComponent} from "./components/profile/my-profile/my-profile.component";
import {QuizComponent} from "./components/quiz/quiz/quiz.component";
import {PlacesComponent} from "./components/places/places.component";
import {AllComparisonsComponent} from "./components/comparison/all-comparisons/all-comparisons.component";
import {TravelCategoriesComponent} from "./components/travel/travel-categories/travel-categories.component";
import {EntertainmentCategoriesComponent} from "./components/entertainment/entertainment-categories/entertainment-categories.component";
import {VenueCategoriesComponent} from "./components/venue/venue-categories/venue-categories.component";
import {MemoryComponent} from "./components/memory/memory/memory.component";
import {PostComponent} from "./components/blog/post/post.component";
import {MyMemoriesComponent} from "./components/memory/my-memories/my-memories.component";
import {QuizResultComponent} from "./components/quiz/quiz-result/quiz-result.component";
import {AboutComponent} from "./components/about/about.component";
import {CafeAlbumComponent} from "./components/venue/cafe-album/cafe-album.component";
import {ComparisonModule} from "./components/comparison/comparison.module";
import {AdminPanelComponent} from "./components/admin-panel/admin-panel/admin-panel.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: IndexComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'all-slogans', component: AllSlogansComponent},
  {path: 'all-posts', component: BlogPostsComponent},
  {path: 'post', component: PostComponent},
  {path: 'all-memories', component: AllMemoriesComponent},
  {path: 'memory', component: MemoryComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'my-memories', component: MyMemoriesComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'quiz-result', component: QuizResultComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'all-comparisons', component: AllComparisonsComponent},
  {path: 'all-travel-categories', component: TravelCategoriesComponent},
  {path: 'all-entertainment-categories', component: EntertainmentCategoriesComponent},
  {path: 'all-venue-categories', component: VenueCategoriesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cafe-album', component: CafeAlbumComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
