import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-applynow',
  templateUrl: './applynow.component.html',
  styleUrls: ['./applynow.component.scss'],
})
export class ApplynowComponent implements OnInit {
  @ViewChild('f') formFields: NgForm | any;
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  onSubmit(res: any) {
    this.configService.postfullTime(res).subscribe(
      (res: any) => {
        alert('Data Submitted!');
        this.formFields.reset();
      },
      (err: any) => console.log(err)
    );
  }
}
