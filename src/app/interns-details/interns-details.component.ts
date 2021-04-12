import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-interns-details',
  templateUrl: './interns-details.component.html',
  styleUrls: ['./interns-details.component.scss'],
})
export class InternsDetailsComponent implements OnInit {
  results: any = [];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.getInternDetails();
  }

  getInternDetails(): any {
    this.configService.getIntern().subscribe(
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
