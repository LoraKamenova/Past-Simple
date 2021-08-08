import { Component, OnInit } from '@angular/core';
import {Picture} from "../../../models/picture";
import {ActivatedRoute, Router} from "@angular/router";
import {PictureService} from "../../../services/picture.service";

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit {
  picture: Picture;

  constructor(private route: ActivatedRoute, private pictureService: PictureService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      let id = data['id'];
      this.pictureService.getPicture(id).subscribe((data) => {
        this.picture = data;
      })
    })
  }

}
