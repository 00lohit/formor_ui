import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

import { Data } from '../app.data';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild('f') formFields: NgForm | any;
  crops: any = ['First'];
  newCrop: any = ['Second', 'Third', 'Fourth', 'Fifth'];
  prevCrops: any = ['1'];
  prevNewCrops: any = ['2', '3', '4', '5'];
  count: number = 0;
  prevCount: number = 0;
  state: string = 'Telangana';
  district: string = 'Yadadri Bhuvanagiri';
  year = new Date().getFullYear();
  bags: any = '';
  First: any;
  Second: any;
  Third: any;
  Fourth: any;
  Fifth: any;
  quintalPrevFirst: any;
  quintalPrevSecond: any;
  quintalPrevThird: any;
  quintalPrevFourth: any;
  quintalPrevFifth: any;
  quantity: string = 'quintal';

  mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';

  currentLang: string = 'en';

  constructor(
    private configService: ConfigService,
    private router: Router,
    public translate: TranslateService
  ) {
    // this.currentLang = localStorage.getItem('currentLang') || 'en';
    // this.translate.use(this.currentLang);
  }

  ngOnInit(): void {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
  }

  changeCurrentLang(event: any): void {
    const lang = event.target.value;
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }

  addCrop() {
    this.count++;
    this.crops.push(this.newCrop[this.count - 1]);
  }

  addPrevCrop() {
    this.prevCount++;
    this.prevCrops.push(this.prevNewCrops[this.prevCount - 1]);
  }

  deleteCrop() {
    if (this.crops.length > 1) {
      this.crops.pop();
      this.count--;
    }
  }

  deletePrevCrop() {
    if (this.prevCrops.length > 1) {
      this.prevCrops.pop();
      this.prevCount--;
    }
  }

  bagsToQuintal() {
    return (this.bags * 72) / 100;
  }

  convertFirst() {
    this.First = this.bagsToQuintal();
    this.bags = '';
  }
  convertFifth() {
    this.Fifth = this.bagsToQuintal();
    this.bags = '';
  }
  convertSecond() {
    this.Second = this.bagsToQuintal();
    this.bags = '';
  }
  convertThird() {
    this.Third = this.bagsToQuintal();
    this.bags = '';
  }
  convertFourth() {
    this.Fourth = this.bagsToQuintal();
    this.bags = '';
  }
  convertPrevFirst() {
    this.quintalPrevFirst = this.bagsToQuintal();
    this.bags = '';
  }
  convertPrevSecond() {
    this.quintalPrevSecond = this.bagsToQuintal();
    this.bags = '';
  }
  convertPrevThird() {
    this.quintalPrevThird = this.bagsToQuintal();
    this.bags = '';
  }
  convertPrevFourth() {
    this.quintalPrevFourth = this.bagsToQuintal();
    this.bags = '';
  }
  convertPrevFifth() {
    this.quintalPrevFifth = this.bagsToQuintal();
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
      (res: any) => {
        console.log(f);
        alert('Data Submitted Succesfully!');
        this.router.navigateByUrl('/enrolled-list');
        this.formFields.reset();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
