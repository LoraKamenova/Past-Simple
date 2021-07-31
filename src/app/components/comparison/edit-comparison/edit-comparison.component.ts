import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Comparison} from "../../../models/comparison";
import {ActivatedRoute, Router} from "@angular/router";
import {ComparisonService} from "../comparison.service";

@Component({
  selector: 'app-edit-comparison',
  templateUrl: './edit-comparison.component.html',
  styleUrls: ['./edit-comparison.component.css']
})
export class EditComparisonComponent implements OnInit {
  comparison: Comparison;
  form = new FormGroup({
    imageUrl: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required])
  });

  constructor(private route: ActivatedRoute, private comparisonService: ComparisonService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.comparisonService.getComparison(id)
        .subscribe(data => {
          this.comparison = data;
          this.form.controls.imageUrl.setValue(this.comparison.imageUrl);
          this.form.controls.title.setValue(this.comparison.title);

        })
    });
  }

  editComparison() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.comparison.imageUrl = this.form.value.imageUrl;
      this.comparison.title = this.form.value.title;
      this.comparisonService.editComparison(id, this.comparison).subscribe(data => {
        this.router.navigate(['comparison/all/admin']);
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
