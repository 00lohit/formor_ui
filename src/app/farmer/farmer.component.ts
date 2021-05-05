import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss'],
})
export class FarmerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(res: any) {
    console.log(res);
  }
}
