import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Comparison} from "../../../models/comparison";
import {ComparisonService} from "../comparison.service";

@Component({
  selector: 'app-all-comparisons',
  templateUrl: './all-comparisons.component.html',
  styleUrls: ['./all-comparisons.component.css']
})
export class AllComparisonsComponent implements OnInit {
  comparison$: Observable<Array<Comparison>>;

  constructor(private comparisonService: ComparisonService) { }

  ngOnInit(): void {
    this.comparison$ = this.comparisonService.getAllComparisons();
  }

}
