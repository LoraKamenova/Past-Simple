import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {Observable} from "rxjs";
import {Picture} from "../../../models/picture";
import {ActivatedRoute, Router} from "@angular/router";
import {PictureService} from "../../../services/picture.service";

export const fade = trigger('fade', [
  state('inactive', style({ opacity: 0 })),
  state('active', style({ opacity: 1 })),
  transition('* <=> *', [
    animate(2500)
  ])
]);

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css'],
  animations: [fade]
})


export class CafeComponent implements OnInit {
  picture$: Observable<Array<Picture>>;

  times = 999;
  counter = 0;
  state;

  constructor(private route: ActivatedRoute, private pictureService: PictureService, private router: Router) { }

  ngOnInit(): void {
    this.picture$ = this.pictureService.getCafeAlbum();
    console.log(this.picture$)
  }

  onDone($event) {
    if (this.counter < this.times) {
      this.state = this.state === 'active' ? 'inactive' : 'active';
      this.counter++;
    }
  }

}
