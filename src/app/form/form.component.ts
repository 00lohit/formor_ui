import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  crops: any = [1];
  count: number = 1;

  constructor() {}

  ngOnInit(): void {}

  addCrop() {
    this.count++;
    this.crops.push(this.count);
  }
}
