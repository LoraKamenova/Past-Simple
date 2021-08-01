import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PostService} from "../../../services/post.service";
import {Post} from "../../../models/post";

@Component({
  selector: 'app-blog-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  post$: Observable<Array<Post>>;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.post$ = this.postService.getAllPosts();
  }

}
