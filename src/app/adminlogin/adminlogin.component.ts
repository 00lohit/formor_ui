import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';
import jwt_decode from 'jwt-decode';
const roles: any = [
  { name: 'agent', roles: ['admin'] },
  { name: 'farmer', roles: ['admin', 'fpo', 'agent'] },
  { name: 'fpo', roles: ['admin', 'agent'] },
];

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss'],
})
export class AdminloginComponent implements OnInit {
  roles: any = [];
  constructor(private router: Router, private configService: ConfigService) {}

  ngOnInit(): void {
    const token: any = localStorage.getItem('token');
    const decoded: any = jwt_decode(token);
    const role = decoded.role;
    this.roles = roles.filter((val: any) => {
      return val.roles.find((roleElement: any) => roleElement === role);
    });
  }

  onSubmit(res: any) {
    this.configService.addUser(res).subscribe(
      (res: any) => {
        if (res.status === 'User Already Existed!')
          alert('User Already Existed!');
        else this.router.navigate(['/createUsers']);
      },
      (err: any) => console.log(err)
    );
  }
}
