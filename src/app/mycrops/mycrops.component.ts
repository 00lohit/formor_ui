import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-mycrops',
  templateUrl: './mycrops.component.html',
  styleUrls: ['./mycrops.component.scss'],
})
export class MycropsComponent implements OnInit {
  farmerId: any;
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    const id = localStorage.getItem('farmerId');
    this.farmerId = id;
    this.getCrops({ userId: this.farmerId });
  }

  getCrops(res: any) {
    console.log(res);
    this.configService.getCrops(res).subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
    );
  }
}
