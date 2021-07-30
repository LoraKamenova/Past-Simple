import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MemoryService} from "../../memory/memory.service";
import {Router} from "@angular/router";
import {SloganService} from "../slogan.service";

@Component({
  selector: 'app-add-slogan',
  templateUrl: './create-slogan.component.html',
  styleUrls: ['./create-slogan.component.css']
})
export class CreateSloganComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private sloganService: SloganService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      content: ['', [Validators.required]],
      note: ['', []],
    });
  }

  createSlogan() {
    this.sloganService.createSlogan(this.form.value).subscribe((data) => {
      this.router.navigate(['slogan/all'])
    })
  }

  get f() {
    return this.form.controls;
  }

  get invalid() {
    return this.form.invalid;
  }

}
