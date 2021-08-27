import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-uplaods',
  templateUrl: './uplaods.component.html',
  styleUrls: ['./uplaods.component.scss'],
})
export class UplaodsComponent implements OnInit {
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  onSubmit(f: any) {
    console.log(f);
    // this.configService.upload(f).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //   },
    //   (err: any) => {
    //     console.log(err);
    //   }
    // );
  }
}
