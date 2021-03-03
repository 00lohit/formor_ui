import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

import { Data } from '../app.data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild('f') formFields: NgForm | any;
  crops: any = ['First'];
  newCrop: any = ['Second', 'Third', 'Fourth', 'Fifth'];
  count: number = 0;
  state: string = 'Telangana';
  district: string = 'Yadadri Bhuvanagiri';
  year = new Date().getFullYear();
  bags: any = '';
  quintal: any;

  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';

  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {}

  addCrop() {
    this.count++;
    this.crops.push(this.newCrop[this.count - 1]);
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

  // /* To copy Text from Textbox */
  // copyInputMessage(inputElement: any) {
  //   inputElement.select();
  //   document.execCommand('copy');
  //   inputElement.setSelectionRange(0, 0);
  // }

  onSubmit(f: Data) {
    console.log(f);
    this.configService.post(f).subscribe(
      (res) => {
        alert('Data Submitted Succesfully!');
        this.router.navigateByUrl('/enrolled-list');
        this.formFields.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
