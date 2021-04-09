import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-sellerform',
  templateUrl: './sellerform.component.html',
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
}
