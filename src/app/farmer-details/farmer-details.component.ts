import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-farmer-details',
  templateUrl: './farmer-details.component.html',
  styleUrls: ['./farmer-details.component.scss'],
})
export class FarmerDetailsComponent implements OnInit {
  results: any = [];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.getFarmerDetails();
  }

  getFarmerDetails(): any {
    this.configService.getFarmer().subscribe(
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
