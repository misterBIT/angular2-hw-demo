import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  baseUrl = 'http://localhost:3003/data/user';

  constructor(private http:Http) {

  }

  findAll() {
    return this.http.get(this.baseUrl)
      .map(res=>res.json());
  }

  save(user) {
    let method = 'post';
    let url = this.baseUrl;
    if (user.id) { // PUT for replace
      url += `/${user.id}`;
      method = 'put';
    }
    return this.http[method](url, JSON.stringify(user), {headers: new Headers({'content-type':'application/json'})})
      .map(res=>res.json());
  }

}
