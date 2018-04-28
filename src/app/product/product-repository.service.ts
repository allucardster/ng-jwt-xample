import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs';

@Injectable()
export class ProductRepositoryService {

  constructor(private authHttp: AuthHttp) { }

  getList() {
    let url = 'http://jwtxample.loc/api/products';

    return this.authHttp
      .get(url)
      .map((data: Response) => data.json());
  }
}
