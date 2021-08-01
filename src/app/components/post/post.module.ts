import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllPostsComponent} from './all-posts/all-posts.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {RouterModule} from "@angular/router";
import {AllPostsAdminComponent} from './all-posts-admin/all-posts-admin.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PostService} from "./post.service";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'create', component: CreatePostComponent},
      {path: 'all', component: AllPostsComponent},
      {path: 'all/admin', component: AllPostsAdminComponent},
      {path: 'details/:id', component: PostDetailsComponent},
      {path: 'edit/:id', component: EditPostComponent},
    ])
  ],
  declarations: [
    AllPostsComponent,
    CreatePostComponent,
    EditPostComponent,
    PostDetailsComponent,
    AllPostsAdminComponent
  ],
  providers: [
    PostService,
  ]
})
export class PostModule {
}
