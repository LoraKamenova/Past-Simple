import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ComparisonService} from "../comparison.service";
import {Comparison} from "../../../models/comparison";

@Component({
  selector: 'app-all-comparisons-admin',
  templateUrl: './all-comparisons-admin.component.html',
  styleUrls: ['./all-comparisons-admin.component.css']
})
export class AllComparisonsAdminComponent implements OnInit {
  comparison$: Observable<Array<Comparison>>;

  constructor(private comparisonService: ComparisonService) { }

  ngOnInit(): void {
    this.comparison$ = this.comparisonService.getAllComparisons();
  }

  deleteComparison(id) {
    console.log(id)
    this.comparisonService.deleteComparison(id).subscribe((data) => {
      console.log('delete', data)
      this.comparison$ = this.comparisonService.getAllComparisons();
    });
  }

}
