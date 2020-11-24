import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Mypost } from "./../interfaces/mypost";

@Injectable({
  providedIn: 'root'
})
export class MypostService {

  basu_url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAllPost() {
    return this.http.get<Mypost[]>(this.basu_url);
  }

  getPost(id: string) {
    const paht = this.basu_url + '/' + id;
    return this.http.get<Mypost>(paht);
  }
  createPost(post: Mypost){
    return this.http.post(this.basu_url,post);
  }

}
