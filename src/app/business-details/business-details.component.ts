import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss'],
})
export class BusinessDetailsComponent implements OnInit {
  results: any = [];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.getBusinessDetails();
  }

  getBusinessDetails(): any {
    this.configService.getBusiness().subscribe(
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
