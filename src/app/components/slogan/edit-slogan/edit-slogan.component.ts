import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {SloganService} from "../../../services/slogan.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Slogan} from "../../../models/slogan";

@Component({
  selector: 'app-edit-slogan',
  templateUrl: './edit-slogan.component.html',
  styleUrls: ['./edit-slogan.component.css']
})
export class EditSloganComponent implements OnInit {
  slogan: Slogan;
  form = new FormGroup({
    content: new FormControl('', [Validators.required]),
    note: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private sloganService: SloganService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.sloganService.getSlogan(id)
        .subscribe(data => {
          this.slogan = data;
          this.form.controls.content.setValue(this.slogan.content);
          this.form.controls.note.setValue(this.slogan.note);

        })
    });
  }


  editSlogan() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.slogan.content = this.form.value.content;
      this.slogan.note = this.form.value.note;
      this.sloganService.editSlogan(id, this.slogan).subscribe(data => {
        this.router.navigate(['slogan/all/admin']);
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
