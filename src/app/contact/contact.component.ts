<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../config.service';
>>>>>>> b16ade6ac24263a448048d31a11b78013b37865c

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
<<<<<<< HEAD
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('c') formFilds: NgForm | any;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  onSubmit(c: any) {
    this.configService.postContact(c).subscribe(
      (res: any) => {
        alert('Data Submitted Successfully');
        this.formFilds.reset();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
>>>>>>> b16ade6ac24263a448048d31a11b78013b37865c
}
