import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-farmerform',
  templateUrl: './farmerform.component.html',
  styleUrls: ['./farmerform.component.scss'],
})
export class FarmerformComponent implements OnInit {
  @ViewChild('f') formFields: NgForm | any;
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  onSubmit(res: any) {
    this.configService.postFarmer(res).subscribe(
      (res: any) => {
        alert('Data Submitted!');
        this.formFields.reset();
      },
      (err: any) => console.log(err)
    );
  }
}
