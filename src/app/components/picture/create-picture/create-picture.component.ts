import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PictureService} from "../../../services/picture.service";

@Component({
  selector: 'app-create-picture',
  templateUrl: './create-picture.component.html',
  styleUrls: ['./create-picture.component.css']
})
export class CreatePictureComponent implements OnInit {
  form: FormGroup;
  Categories: any = ['Apple', 'Mengo', 'Banana', 'Strawberry']

  constructor(private fb: FormBuilder, private pictureService: PictureService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  get category() {
    return this.form.get('category');
  }

  changeCategory(e) {
    this.category.setValue(e.target.value, {
      onlySelf: true
    })
  }

  createPicture() {
    this.pictureService.createPicture(this.form.value).subscribe((data) => {
      this.router.navigate(['memory/all'])
    })
  }

  get f() {
    return this.form.controls;
  }

  get invalid() {
    return this.form.invalid;
  }

}


