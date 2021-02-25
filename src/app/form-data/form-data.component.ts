import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { map } from 'rxjs/operators';

import { Data } from '../app.data';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss'],
})
export class FormDataComponent implements OnInit {
  data: any;
  results: Data[] = [];
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.configService
      .get()
      .pipe(
        map((responseData) => {
          const postsArray: Data[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe(
        (response) => {
          // console.log(response);
          this.results = response;
        },
        (err) => console.log(err)
      );
  }
}
