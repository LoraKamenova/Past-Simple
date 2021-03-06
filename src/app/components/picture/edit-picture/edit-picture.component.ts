import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Picture} from "../../../models/picture";
import {PictureService} from "../../../services/picture.service";

@Component({
  selector: 'app-edit-picture',
  templateUrl: './edit-picture.component.html',
  styleUrls: ['./edit-picture.component.css']
})
export class EditPictureComponent implements OnInit {

  picture: Picture;
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
    'Други забавления',
  ]

  Formats: any = [
    'широк',
    'висок'
  ]

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    format: new FormControl('', [Validators.required]),
  });

  constructor(private route: ActivatedRoute, private pictureService: PictureService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.pictureService.getPicture(id)
        .subscribe(data => {
          this.picture = data;
          this.form.controls.title.setValue(this.picture.title);
          this.form.controls.imageUrl.setValue(this.picture.imageUrl);
          this.form.controls.category.setValue(this.picture.category);
          this.form.controls.format.setValue(this.picture.format);

        })
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

  editPicture() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.picture.title = this.form.value.title;
      this.picture.imageUrl = this.form.value.imageUrl;
      this.picture.category = this.form.value.category;
      this.picture.format = this.form.value.format;
      this.pictureService.editPicture(id, this.picture).subscribe(data => {
        this.router.navigate(['admin-panel']);
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
