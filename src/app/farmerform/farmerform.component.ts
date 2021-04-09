import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
<<<<<<< HEAD
=======
import { ConfigService } from '../config.service';
>>>>>>> b16ade6ac24263a448048d31a11b78013b37865c

@Component({
  selector: 'app-farmerform',
  templateUrl: './farmerform.component.html',
  styleUrls: ['./farmerform.component.scss'],
})
export class FarmerformComponent implements OnInit {
<<<<<<< HEAD
  constructor() {}

  ngOnInit(): void {}
=======
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
>>>>>>> b16ade6ac24263a448048d31a11b78013b37865c
}
