import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {FbCreateResponse, Post, User, UserRegister} from './components/interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})

export class PostsService {
  constructor(private http: HttpClient) {
  }

  create(post: Post): Observable<Post> {
    // return this.http.post(`${environment.fbDbUrl}/post/${post.phone}.json`, post)
    //   .pipe(map((response: FbCreateResponse) => {
    //     return {
    //       ...post,
    //       id: response.name
    //     };
    //   }));
    return this.http.post(`${environment.fbDbUrl}/orders.json`, post)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...post,
          id: response.name
        };
      }));
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.fbDbUrl}/orders.json`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key
          }));
      }));
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/orders/${id}.json`);
  }

  addUserBb(reg: UserRegister): Observable<UserRegister> {
    return this.http.post(`${environment.fbDbUrl}/reg.json`, reg)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...reg,
          id: response.name
        };
      }));
  }
  getUserBb(): Observable<UserRegister[]> {
    return this.http.get(`${environment.fbDbUrl}/reg.json`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key
          }));
      }));
  }
}
