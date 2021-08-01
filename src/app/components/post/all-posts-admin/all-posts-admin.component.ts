import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../services/post.service";
import {Post} from "../../../models/post";

@Component({
  selector: 'app-all-posts-admin',
  templateUrl: './all-posts-admin.component.html',
  styleUrls: ['./all-posts-admin.component.css']
})
export class AllPostsAdminComponent implements OnInit {
  post$: Observable<Array<Post>>;

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.post$ = this.postService.getAllPosts();
  }

  deletePost(id) {
    console.log(id)
    this.postService.deletePost(id).subscribe((data) => {
      console.log('delete', data)
      this.post$ = this.postService.getAllPosts();
    });
  }
}
