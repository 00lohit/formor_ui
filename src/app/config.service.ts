import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './app.data';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  _url = window.location.origin + '/api/v1/data';

  constructor(private http: HttpClient) {}

  post(data: Data) {
    return this.http.post(this._url, data);
  }

  get() {
    return this.http.get(this._url);
  }
}
