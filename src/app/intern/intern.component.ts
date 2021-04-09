<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../config.service';
>>>>>>> b16ade6ac24263a448048d31a11b78013b37865c

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
<<<<<<< HEAD
  styleUrls: ['./intern.component.scss']
})
export class InternComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
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
>>>>>>> b16ade6ac24263a448048d31a11b78013b37865c
}
