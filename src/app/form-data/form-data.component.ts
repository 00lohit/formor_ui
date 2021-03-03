import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { map } from 'rxjs/operators';

import { Data } from '../app.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss'],
})
export class FormDataComponent implements OnInit {
  data: Data[] = [];
  results: any = [];
  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  home() {
    this.router.navigateByUrl('/enroll');
  }

  getData() {
    this.configService.get().subscribe(
      (res: any) => {
        this.results = res.data.data;
      },
      (err) => console.log(err)
    );
  }
}
