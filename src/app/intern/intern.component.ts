import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss'],
})
export class InternComponent implements OnInit {
  @ViewChild('f') formFields: NgForm | any;
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  onSubmit(res: any) {
    this.configService.postIntern(res).subscribe(
      (res: any) => {
        alert('Data Submitted!');
        this.formFields.reset();
      },
      (err: any) => console.log(err)
    );
  }
}
