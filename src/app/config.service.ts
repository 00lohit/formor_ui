import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './app.data';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  url = environment.apiURL + 'v1/data';

  constructor(private http: HttpClient) { }

  post(data: Data): any {
    return this.http.post(this.url, data);
  }

  get(): any {
    return this.http.get(this.url);
  }
}
