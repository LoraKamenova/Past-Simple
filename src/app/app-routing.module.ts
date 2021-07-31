import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {IndexComponent} from "./components/index/index.component";
import {BlogPostsComponent} from "./components/blog/all-posts/blog-posts.component";
import {MyProfileComponent} from "./components/profile/my-profile/my-profile.component";
import {QuizComponent} from "./components/quiz/quiz/quiz.component";
import {PlacesComponent} from "./components/places/places.component";
import {TravelCategoriesComponent} from "./components/travel/travel-categories/travel-categories.component";
import {EntertainmentCategoriesComponent} from "./components/entertainment/entertainment-categories/entertainment-categories.component";
import {VenueCategoriesComponent} from "./components/venue/venue-categories/venue-categories.component";
import {PostComponent} from "./components/blog/post/post.component";
import {QuizResultComponent} from "./components/quiz/quiz-result/quiz-result.component";
import {AboutComponent} from "./components/about/about.component";
import {CafeAlbumComponent} from "./components/venue/cafe-album/cafe-album.component";
import {SigninComponent} from "./components/authentication/signin/signin.component";
import {SignupComponent} from "./components/authentication/signup/signup.component";
import {AuthGuard} from "./components/authentication/guards/auth.guard";
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: IndexComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'memory', loadChildren: './components/memory/memory.module#MemoryModule', canActivate: [AuthGuard]},
  {path: 'slogan', loadChildren: './components/slogan/slogan.module#SloganModule', canActivate: [AuthGuard]},
  {path: 'comparison', loadChildren: './components/comparison/comparison.module#ComparisonModule', canActivate: [AuthGuard]},
  {path: 'admin-panel', component: AdminPanelComponent},

  {path: 'all-posts', component: BlogPostsComponent},
  {path: 'post', component: PostComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'quiz-result', component: QuizResultComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'all-travel-categories', component: TravelCategoriesComponent},
  {path: 'all-entertainment-categories', component: EntertainmentCategoriesComponent},
  {path: 'all-venue-categories', component: VenueCategoriesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cafe-album', component: CafeAlbumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
