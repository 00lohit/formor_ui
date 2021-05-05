import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.scss'],
})
export class VerifyotpComponent implements OnInit {
  role: any;
  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(res: any) {
    const id = localStorage.getItem('userId');
    res.id = id;
    this.configService.verify(res).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/createUsers']);
      },
      (err: any) => {
        console.log(err);
        alert('Wrong Otp');
      }
    );
  }
}
