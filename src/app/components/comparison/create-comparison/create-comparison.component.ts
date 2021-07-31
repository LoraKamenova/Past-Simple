import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ComparisonService} from "../comparison.service";

@Component({
  selector: 'app-create-comparison',
  templateUrl: './create-comparison.component.html',
  styleUrls: ['./create-comparison.component.css']
})
export class CreateComparisonComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private comparisonService: ComparisonService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
    });
  }

  createComparison() {
    this.comparisonService.createComparison(this.form.value).subscribe((data) => {
      this.router.navigate(['comparison/all/admin'])
    })
  }

  get f() {
    return this.form.controls;
  }

  get invalid() {
    return this.form.invalid;
  }

}
