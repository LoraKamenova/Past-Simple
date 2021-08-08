import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {PictureService} from "../../../services/picture.service";
import {Picture} from "../../../models/picture";

@Component({
  selector: 'app-all-pictures-admin',
  templateUrl: './all-pictures-admin.component.html',
  styleUrls: ['./all-pictures-admin.component.css']
})
export class AllPicturesAdminComponent implements OnInit {
  picture$: Observable<Array<Picture>>;

  constructor(private route: ActivatedRoute, private pictureService: PictureService, private router: Router) { }

  ngOnInit(): void {
    this.picture$ = this.pictureService.getCafeAlbum();
  }

  deletePicture(id) {
    console.log(id)
    this.pictureService.deletePicture(id).subscribe((data) => {
      console.log('delete', data)
      this.picture$ = this.pictureService.getAllPictures();
    });
  }

}
