import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-myfarms',
  templateUrl: './myfarms.component.html',
  styleUrls: ['./myfarms.component.scss'],
})
export class MyfarmsComponent implements OnInit {
  farms: any = [];
  farmerId: any;
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    const id = localStorage.getItem('farmerId');
    this.farmerId = id;
    this.getFarms({ userId: this.farmerId });
  }

  getFarms(res: any) {
    this.configService.getFarms(res).subscribe(
      (res: any) => {
        this.farms = res.data.farms;
      },
      (err: any) => console.log(err)
    );
  }
}
