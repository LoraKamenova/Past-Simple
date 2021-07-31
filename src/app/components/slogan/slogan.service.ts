import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Slogan} from "../../models/slogan";

const createSloganUrl = "http://localhost:5000/slogan/create";
const getAllSlogansUrl = "http://localhost:5000/slogan/all";
const getSingleSloganUrl = "http://localhost:5000/slogan/details/";
const deleteSloganUrl = "http://localhost:5000/slogan/delete/";
const editSloganUrl = "http://localhost:5000/slogan/edit/";

@Injectable({
  providedIn: 'root'
})
export class SloganService {

  constructor(private http: HttpClient) { }

  createSlogan(data) {
    return this.http.post(createSloganUrl, data);
  }

  getAllSlogans(): Observable<Array<Slogan>> {
    return this.http.get<Array<Slogan>>(getAllSlogansUrl)
  }

  getSlogan(id): Observable<Slogan> {
    return this.http.get<Slogan>(getSingleSloganUrl + id)
  }

  editSlogan(id, data: Slogan) {
    return this.http.put<Slogan>(editSloganUrl + id, data);
  }

  deleteSlogan(id) {
    return this.http.delete(deleteSloganUrl + id);
  }
}
