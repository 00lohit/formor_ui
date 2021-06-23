import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(res: any) {
    this.configService.login(res).subscribe(
      (res: any) => {
        // alert('OTP:' + res.user.otp);
        // console.log(res.user.otp);
        localStorage.setItem('contact', res.user.contact);
        localStorage.setItem('userId', res.user._id);
        localStorage.setItem('role', res.user.role);
        this.router.navigate(['/verifyotp']);
      },
      (err: any) => console.log(err)
    );

    // this.router.navigate(['/signin']);
  }

  // onSubmit(f: any) {
  //   this.configService.fpoLogin(f).subscribe(
  //     (res: any) => {
  //       alert(res.message);
  //     },
  //     (err: any) => alert(err)
  //   );
  // }
}
