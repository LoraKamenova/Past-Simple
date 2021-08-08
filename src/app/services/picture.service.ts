import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Picture} from "../models/picture";

const createPictureUrl = "http://localhost:5000/picture/create";
const getAllPicturesUrl = "http://localhost:5000/picture/all";
const getSinglePictureUrl = "http://localhost:5000/picture/details/";
const deletePictureUrl = "http://localhost:5000/picture/delete/";
const editPictureUrl = "http://localhost:5000/picture/edit/";

const getCafeAlbumUrl = "http://localhost:5000/picture/cafe-album";


@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) { }

  createPicture(data) {
    return this.http.post(createPictureUrl, data);
  }

  getAllPictures(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getAllPicturesUrl);
  }

  getPicture(id): Observable<Picture> {
    return this.http.get<Picture>(getSinglePictureUrl + id);
  }

  editPicture(id, data: Picture) {
    return this.http.put<Picture>(editPictureUrl + id, data);
  }

  deletePicture(id) {
    return this.http.delete(deletePictureUrl + id);
  }

  getCafeAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getCafeAlbumUrl);
  }
}
