import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Memory} from "../../models/memory";


const createMemoryUrl = "http://localhost:5000/memory/create";
const getAllMemoriesUrl = "http://localhost:5000/memory/all";
const getSingleMemoryUrl = "http://localhost:5000/memory/details/";
const getUserMemoriesUrl = "http://localhost:5000/memory/user/";
const deleteMemoryUrl = "http://localhost:5000/memory/delete/";

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor(private http: HttpClient) { }

  createMemory(data) {
    return this.http.post(createMemoryUrl, data);
  }

  getAllMemories(): Observable<Array<Memory>> {
    return this.http.get<Array<Memory>>(getAllMemoriesUrl)
  }

  getMemory(id): Observable<Memory> {
    return this.http.get<Memory>(getSingleMemoryUrl + id)
  }

  getUserMemories(): Observable<Array<Memory>> {
    return this.http.get<Array<Memory>>(getUserMemoriesUrl)
  }

  deleteMemory(id) {
    return this.http.delete(deleteMemoryUrl + id);
  }
}
