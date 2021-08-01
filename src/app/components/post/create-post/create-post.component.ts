import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-add-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      subtitle: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      imageUrl1: ['', Validators.required],
      imageUrl2: ['', Validators.required],
      imageUrl3: ['', Validators.required],
    });
  }

  createPost() {
    this.postService.createPost(this.form.value).subscribe((data) => {
      this.router.navigate(['post/all/admin'])
    })
  }

  get f() {
    return this.form.controls;
  }

  get invalid() {
    return this.form.invalid;
  }

}
