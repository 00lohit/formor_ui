import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  _url = 'https://farmform-default-rtdb.firebaseio.com/data.json';

  constructor(private http: HttpClient) {}

  post(modal: any) {
    return this.http.post(this._url, modal);
  }

  get() {
    return this.http.get<{ [key: string]: [] }>(this._url);
  }
}
