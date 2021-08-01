import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";

const createPostUrl = "http://localhost:5000/post/create";
const getAllPostsUrl = "http://localhost:5000/post/all";
const getSinglePostUrl = "http://localhost:5000/post/details/";
const deletePostUrl = "http://localhost:5000/post/delete/";
const editPostUrl = "http://localhost:5000/post/edit/";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  createPost(data) {
    return this.http.post(createPostUrl, data);
  }

  getAllPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(getAllPostsUrl)
  }

  getPost(id): Observable<Post> {
    return this.http.get<Post>(getSinglePostUrl + id)
  }

  editPost(id, data: Post) {
    return this.http.put<Post>(editPostUrl + id, data);
  }

  deletePost(id) {
    return this.http.delete(deletePostUrl + id);
  }
}
