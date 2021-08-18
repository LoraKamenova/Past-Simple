import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Picture} from "../../../models/picture";
import {ActivatedRoute, Router} from "@angular/router";
import {PictureService} from "../../../services/picture.service";

@Component({
  selector: 'app-all-pictures-sea-admin',
  templateUrl: './all-pictures-sea-admin.component.html',
  styleUrls: ['./all-pictures-sea-admin.component.css']
})
export class AllPicturesSeaAdminComponent implements OnInit {
  picture$: Observable<Array<Picture>>;

  constructor(private route: ActivatedRoute, private pictureService: PictureService, private router: Router) { }

  ngOnInit(): void {
    this.picture$ = this.pictureService.getSeaAlbum();
  }

  deletePicture(id) {
    console.log(id)
    this.pictureService.deletePicture(id).subscribe((data) => {
      console.log('delete', data)
      this.picture$ = this.pictureService.getSeaAlbum();
    });
  }

}
