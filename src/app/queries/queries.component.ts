import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss'],
})
export class QueriesComponent implements OnInit {
  results: any = [];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.getContactDetails();
  }

  getContactDetails(): any {
    this.configService.getContact().subscribe(
      (res: any) => {
        // console.log(res.data.data);
        this.results = res.data.data;
        // this.data.emit(this.results);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
