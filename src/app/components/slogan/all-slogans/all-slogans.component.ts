import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Slogan} from "../../../models/slogan";
import {SloganService} from "../../../services/slogan.service";

@Component({
  selector: 'app-all-slogans',
  templateUrl: './all-slogans.component.html',
  styleUrls: ['./all-slogans.component.css']
})
export class AllSlogansComponent implements OnInit {
  slogan$: Observable<Array<Slogan>>;

  constructor(private sloganService: SloganService) { }

  ngOnInit(): void {
    this.slogan$ = this.sloganService.getAllSlogans();
  }
}
