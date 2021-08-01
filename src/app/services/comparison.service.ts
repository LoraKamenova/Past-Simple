import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comparison} from "../models/comparison";

const createComparisonUrl = "http://localhost:5000/comparison/create";
const getAllComparisonsUrl = "http://localhost:5000/comparison/all";
const getSingleComparisonUrl = "http://localhost:5000/comparison/details/";
const deleteComparisonUrl = "http://localhost:5000/comparison/delete/";
const editComparisonUrl = "http://localhost:5000/comparison/edit/";

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  constructor(private http: HttpClient) { }

  createComparison(data) {
    return this.http.post(createComparisonUrl, data);
  }

  getAllComparisons(): Observable<Array<Comparison>> {
    return this.http.get<Array<Comparison>>(getAllComparisonsUrl)
  }

  getComparison(id): Observable<Comparison> {
    return this.http.get<Comparison>(getSingleComparisonUrl + id)
  }

  editComparison(id, data: Comparison) {
    return this.http.put<Comparison>(editComparisonUrl + id, data);
  }

  deleteComparison(id) {
    return this.http.delete(deleteComparisonUrl + id);
  }
}
