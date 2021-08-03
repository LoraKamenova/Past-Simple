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
  Categories: any = [
    'Море',
    'Планина',
    'Минерални бани',
    'Къмпинг',
    'Градове',
    'Хотели',
    'Сладкарници',
    'Ресторанти',
    'Ханчета',
    'Кино',
    'Медии',
    'Други развлечения',
  ]

  Formats: any = [
    'широк',
    'висок',
    'квадрат'
  ]

  constructor(private fb: FormBuilder, private pictureService: PictureService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
      category: ['', Validators.required],
      format: ['', Validators.required],
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

  get format() {
    return this.form.get('format');
  }

  changeFormat(e) {
    this.format.setValue(e.target.value, {
      onlySelf: true
    })
  }

  createPicture() {
    this.pictureService.createPicture(this.form.value).subscribe((data) => {
      this.router.navigate(['home'])
    })
  }

  get f() {
    return this.form.controls;
  }

  get invalid() {
    return this.form.invalid;
  }

}


