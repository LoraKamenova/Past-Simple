import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostComponent } from './post/post.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [BlogPostsComponent, AddPostComponent, DeletePostComponent, EditPostComponent, PostComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class BlogModule { }
