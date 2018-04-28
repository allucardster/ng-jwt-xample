import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {

  }

  authenticate(user: any) {
    let url     = 'http://jwtxample.loc/auth/login_check';
    let body     = new URLSearchParams();
    body.append('_username', user.username);
    body.append('_password', user.password);
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});

    return this.http
            .post(url, body.toString(), options)
          .map((data: Response) => data.json());
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired('id_token')
  }
}
