import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

import { Data } from '../app.data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  crops: any = [1];
  count: number = 1;
  state: string = 'Telangana';
  district: string = 'Warangal';
  year = new Date().getFullYear();
  bags: any = '';
  quintal: any;

  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';

  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {}

  addCrop() {
    this.count++;
    this.crops.push(this.count);
  }

  deleteCrop() {
    if (this.crops.length > 1) {
      this.crops.pop();
      this.count--;
    }
  }

  convert() {
    this.quintal = (this.bags * 72) / 100;
    this.bags = '';
  }

  /* To copy Text from Textbox */
  copyInputMessage(inputElement: any) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  onSubmit(f: Data) {
    console.log(f);
    this.configService.post(f).subscribe(
      (res) => {
        // console.log(res);
      },
      (error) => {
        // console.log(error);
      }
    );
    this.router.navigateByUrl('/formdata');
  }
}
