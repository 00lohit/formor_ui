import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-fulltime-details',
  templateUrl: './fulltime-details.component.html',
  styleUrls: ['./fulltime-details.component.scss'],
})
export class FulltimeDetailsComponent implements OnInit {
  results: any = [];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.getFulltimeDetails();
  }

  getFulltimeDetails(): any {
    this.configService.getfullTime().subscribe(
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
