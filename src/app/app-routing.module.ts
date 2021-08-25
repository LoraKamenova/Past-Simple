import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {IndexComponent} from "./components/index/index.component";
import {MyProfileComponent} from "./components/profile/my-profile/my-profile.component";
import {QuizComponent} from "./components/quiz/quiz/quiz.component";
import {AboutComponent} from "./components/about/about.component";
import {SigninComponent} from "./components/authentication/signin/signin.component";
import {SignupComponent} from "./components/authentication/signup/signup.component";
import {AuthGuard} from "./components/authentication/guards/auth.guard";
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'about', component: AboutComponent},
  {path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard]},
  {path: 'admin-panel', component: AdminPanelComponent, canActivate: [AuthGuard]},
  {path: 'quiz', component: QuizComponent, canActivate: [AuthGuard]},

  {path: 'memory', loadChildren: './components/memory/memory.module#MemoryModule', canActivate: [AuthGuard]},
  {path: 'slogan', loadChildren: './components/slogan/slogan.module#SloganModule', canActivate: [AuthGuard]},
  {path: 'post', loadChildren: './components/post/post.module#PostModule', canActivate: [AuthGuard]},

  {path: 'comparison', loadChildren: './components/comparison/comparison.module#ComparisonModule', canActivate: [AuthGuard]},
  {path: 'categories', loadChildren: './components/categories/categories.module#CategoriesModule', canActivate: [AuthGuard]},
  {path: 'albums', loadChildren: './components/albums/albums.module#AlbumsModule', canActivate: [AuthGuard]},
  {path: 'picture', loadChildren: './components/picture/picture.module#PictureModule', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
