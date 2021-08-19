import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Picture} from "../../../models/picture";
import {ActivatedRoute, Router} from "@angular/router";
import {PictureService} from "../../../services/picture.service";

@Component({
  selector: 'app-all-pictures-cafe-admin',
  templateUrl: './all-pictures-cafe-admin.component.html',
  styleUrls: ['./all-pictures-cafe-admin.component.css']
})
export class AllPicturesCafeAdminComponent implements OnInit {
  picture$: Observable<Array<Picture>>;

  constructor(private route: ActivatedRoute, private pictureService: PictureService, private router: Router) { }

  ngOnInit(): void {
    this.picture$ = this.pictureService.getCafeAlbum();
  }

  deletePicture(id) {
    console.log(id)
    this.pictureService.deletePicture(id).subscribe((data) => {
      console.log('delete', data)
      this.picture$ = this.pictureService.getCafeAlbum();
    });
  }

}
