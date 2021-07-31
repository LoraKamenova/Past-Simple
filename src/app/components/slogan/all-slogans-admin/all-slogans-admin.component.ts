import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Slogan} from "../../../models/slogan";
import {SloganService} from "../slogan.service";

@Component({
  selector: 'app-admin-slogans',
  templateUrl: './all-slogans-admin.component.html',
  styleUrls: ['./all-slogans-admin.component.css']
})
export class AllSlogansAdminComponent implements OnInit {
  slogan$: Observable<Array<Slogan>>;

  constructor(private sloganService: SloganService) { }

  ngOnInit(): void {
    this.slogan$ = this.sloganService.getAllSlogans();
  }

  deleteSlogan(id) {
    console.log(id)
    this.sloganService.deleteSlogan(id).subscribe((data) => {
      console.log('delete', data)
      this.slogan$ = this.sloganService.getAllSlogans();
    });
  }

}
