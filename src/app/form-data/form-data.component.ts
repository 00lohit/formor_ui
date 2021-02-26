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
  // data: any;
  // results: Data[] = [];
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    // this.getData();
  }

  // getData() {
  //   this.configService
  //     .get()
  //     .pipe(
  //       map((respData) => {
  //         const posts: Data[] = [];

  //         for (const key in respData) {
  //           if (respData.hasOwnProperty(key)) {
  //             posts.push({ ...respData[key] });
  //           }
  //         }
  //         return posts;
  //       })
  //     )
  //     .subscribe(
  //       (res) => {
  //         console.log(res);
  //         this.results = res;
  //       },
  //       (err) => console.log(err)
  //     );
  // }
}
