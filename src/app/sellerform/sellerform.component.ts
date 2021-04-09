<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../config.service';
>>>>>>> b16ade6ac24263a448048d31a11b78013b37865c

@Component({
  selector: 'app-sellerform',
  templateUrl: './sellerform.component.html',
<<<<<<< HEAD
  styleUrls: ['./sellerform.component.scss']
})
export class SellerformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
  styleUrls: ['./sellerform.component.scss'],
})
export class SellerformComponent implements OnInit {
  @ViewChild('f') formFields: NgForm | any;
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  onSubmit(res: any) {
    this.configService.postBusiness(res).subscribe(
      (res: any) => {
        alert('Data Submitted!');
        this.formFields.reset();
      },
      (err: any) => console.log(err)
    );
  }
>>>>>>> b16ade6ac24263a448048d31a11b78013b37865c
}
