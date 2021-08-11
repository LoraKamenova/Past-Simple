import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Picture} from "../models/picture";

const createPictureUrl = "http://localhost:5000/picture/create";
const getAllPicturesUrl = "http://localhost:5000/picture/all";
const getSinglePictureUrl = "http://localhost:5000/picture/details/";
const deletePictureUrl = "http://localhost:5000/picture/delete/";
const editPictureUrl = "http://localhost:5000/picture/edit/";

const getSeaAlbumUrl = "http://localhost:5000/picture/sea-album";
const getMountainAlbumUrl = "http://localhost:5000/picture/mountain-album";
const getCampingAlbumUrl = "http://localhost:5000/picture/camping-album";
const getSpaAlbumUrl = "http://localhost:5000/picture/spa-album";
const getHotelsAlbumUrl = "http://localhost:5000/picture/hotels-album";
const getTownsAlbumUrl = "http://localhost:5000/picture/towns-album";
const getRestaurantsAlbumUrl = "http://localhost:5000/picture/restaurants-album";
const getCafeAlbumUrl = "http://localhost:5000/picture/cafe-album";
const getPubsAlbumUrl = "http://localhost:5000/picture/pubs-album";
const getCinemaAlbumUrl = "http://localhost:5000/picture/cinema-album";
const getMediaAlbumUrl = "http://localhost:5000/picture/media-album";
const getOtherEntertainmentAlbumUrl = "http://localhost:5000/picture/other-entertainment-album";


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

  getSeaAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getSeaAlbumUrl);
  }
  getMountainAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getMountainAlbumUrl);
  }
  getCampingAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getCampingAlbumUrl);
  }
  getSpaAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getSpaAlbumUrl);
  }
  getTownsAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getTownsAlbumUrl);
  }
  getHotelsAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getHotelsAlbumUrl);
  }
  getRestaurantsAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getRestaurantsAlbumUrl);
  }
  getCafeAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getCafeAlbumUrl);
  }
  getPubsAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getPubsAlbumUrl);
  }
  getCinemaAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getCinemaAlbumUrl);
  }
  getMediaAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getMediaAlbumUrl);
  }
  getOtherEntertainmentAlbum(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(getOtherEntertainmentAlbumUrl);
  }
}
