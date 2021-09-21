import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.scss'],
})
export class DashboardLoginComponent implements OnInit {
  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(res: any) {
    if (res.contact === 'admin1' && res.password === 'admin2')
      this.router.navigate(['/admindashboard/dash']);
    else alert('Inalid Credentials!');
    // this.configService.login(res).subscribe(
    //   (res: any) => {
    //     localStorage.setItem('contact', res.user.contact);
    //     localStorage.setItem('userId', res.user._id);
    //     localStorage.setItem('role', res.user.role);
    //     this.router.navigate(['/verifyotp']);
    //   },
    //   (err: any) => console.log(err)
    // );
  }
}
