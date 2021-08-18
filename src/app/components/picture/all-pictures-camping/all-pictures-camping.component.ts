import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Picture} from "../../../models/picture";
import {ActivatedRoute, Router} from "@angular/router";
import {PictureService} from "../../../services/picture.service";

@Component({
  selector: 'app-all-pictures-camping',
  templateUrl: './all-pictures-camping.component.html',
  styleUrls: ['./all-pictures-camping.component.css']
})
export class AllPicturesCampingComponent implements OnInit {
  picture$: Observable<Array<Picture>>;

  constructor(private route: ActivatedRoute, private pictureService: PictureService, private router: Router) { }

  ngOnInit(): void {
    this.picture$ = this.pictureService.getCampingAlbum();
  }

  deletePicture(id) {
    console.log(id)
    this.pictureService.deletePicture(id).subscribe((data) => {
      console.log('delete', data)
      this.picture$ = this.pictureService.getCampingAlbum();
    });
  }
}
