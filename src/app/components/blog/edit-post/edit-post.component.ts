import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../../models/post";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../post.service";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: Post;
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    subtitle: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
    content: new FormControl('', [Validators.required, Validators.minLength(10)]),
    imageUrl1: new FormControl('', [Validators.required]),
    imageUrl2: new FormControl('', [Validators.required]),
    imageUrl3: new FormControl('', [Validators.required]),
  });

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.postService.getPost(id)
        .subscribe(data => {
          this.post = data;

          this.form.controls.title.setValue(this.post.title);
          this.form.controls.subtitle.setValue(this.post.subtitle);
          this.form.controls.content.setValue(this.post.content);
          this.form.controls.imageUrl1.setValue(this.post.imageUrl1);
          this.form.controls.imageUrl2.setValue(this.post.imageUrl2);
          this.form.controls.imageUrl3.setValue(this.post.imageUrl3);

        })
    });
  }

  editPost() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.post.title = this.form.value.title;
      this.post.subtitle = this.form.value.subtitle;
      this.post.content = this.form.value.content;
      this.post.imageUrl1 = this.form.value.imageUrl1;
      this.post.imageUrl2 = this.form.value.imageUrl2;
      this.post.imageUrl3 = this.form.value.imageUrl3;
      this.postService.editPost(id, this.post).subscribe(data => {
        this.router.navigate(['post/all/admin']);
      });
    });

  }

  get f() {
    return this.form.controls;
  }

  get invalid() {
    return this.form.invalid;
  }

}
