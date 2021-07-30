import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Memory} from "../../models/memory";
import {Slogan} from "../../models/slogan";

const createSloganUrl = "http://localhost:5000/slogan/create";
const getAllSlogansUrl = "http://localhost:5000/slogan/all";
const getSingleSloganUrl = "http://localhost:5000/slogan/details/";
const deleteSloganUrl = "http://localhost:5000/slogan/delete/";

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

  getSlogan(id): Observable<Memory> {
    return this.http.get<Memory>(getSingleSloganUrl + id)
  }

  deleteSlogan(id) {
    return this.http.delete(deleteSloganUrl + id);
  }
}
