import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
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
}
