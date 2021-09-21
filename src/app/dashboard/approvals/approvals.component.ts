import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.scss'],
})
export class ApprovalsComponent implements OnInit {
  users: any = [];
  user: any = [];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.getApproved();
  }

  getApproved(): any {
    this.configService.getApprovals().subscribe(
      (res: any) => {
        this.users = res.users;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getUserData(user: any) {
    this.user = user;
  }

  approve(userId: any) {
    this.configService.gotApproved({ userId }).subscribe(
      (res: any) => {
        this.getApproved();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  reject() {}
}
