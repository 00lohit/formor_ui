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
  crops: any = [1];
  count: number = 1;
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
        alert('Data Submitted Succesfully!');
        // this.router.navigateByUrl('/formdata');
        this.formFields.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
