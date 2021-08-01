import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../../models/post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      let id = data['id'];
      this.postService.getPost(id).subscribe((data) => {
        this.post = data;
      })
    })
  }

}
