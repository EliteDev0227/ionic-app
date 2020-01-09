import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ParseProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ParseProvider Provider');
  }

}
