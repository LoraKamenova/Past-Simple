import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

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
  times = 999;
  counter = 0;
  state;

  constructor() { }

  ngOnInit(): void {
  }

  onDone($event) {
    // call this function at the end of the previous animation.
    // run it as many time as defined
    if (this.counter < this.times) {
      this.state = this.state === 'active' ? 'inactive' : 'active';
      this.counter++;
    }
  }

}
