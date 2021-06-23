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
  contact: any;
  digit: any;
  farmers: any = [];
  vendors: any = [];
  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {
    this.digit = localStorage.getItem('contact');
    this.contact = this.digit?.slice(-4);

    this.getFarmers();
    this.getVendors();
  }

  getFarmers() {
    this.configService.getFarmers().subscribe(
      (res: any) => {
        this.farmers = res.users;
      },
      (err: any) => console.log(err)
    );
  }
  getVendors() {
    this.configService.getVendors().subscribe(
      (res: any) => {
        this.vendors = res.users;
      },
      (err: any) => console.log(err)
    );
  }

  resendCode() {
    const contact = localStorage.getItem('contact');
    this.configService.login({ contact }).subscribe(
      (res: any) => {
        alert('OTP:' + res.user.otp);
      },
      (err: any) => console.log(err)
    );
  }

  onSubmit(res: any) {
    const id = localStorage.getItem('userId');
    const role = localStorage.getItem('role');
    res.id = id;
    this.configService.verify(res).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);

        if (role === 'admin' || role === 'fpo' || role === 'agent') {
          this.router.navigate(['/users']);
        } else if (role === 'farmer') {
          const farmer = this.farmers.find(
            (el: any) => el.contact === this.digit
          );
          localStorage.setItem('farmerId', farmer._id);
          if (farmer.name) {
            this.router.navigate(['/create-farmer']);
          } else this.router.navigate(['/register']);
        } else if (role === 'vendor') {
          // this.getVendors();
          const vendor = this.vendors.find(
            (el: any) => el.contact === this.digit
          );
          if (vendor.businessName) {
            this.router.navigate(['/vendor-nav']);
          } else this.router.navigate(['/vendor']);
        }
      },
      (err: any) => {
        console.log(err);
        alert('Wrong Otp');
      }
    );
  }
}
