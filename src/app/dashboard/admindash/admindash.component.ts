import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.scss'],
})
export class AdmindashComponent implements OnInit {
  vendors: any;
  farmers: any;
  regFarmers: any;
  approved: any;
  pending: any;
  rejected: any;
  orders: any;
  vendorTransactions: any;
  farmerTransactions: any;
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.getVendors();
    this.getFarmers();
  }

  getVendors() {
    this.configService.getVendors().subscribe(
      (res: any) => {
        this.vendors = res.results;
        this.approved = res.users.filter((el: any) => el.isVerified == true);
        this.pending = res.users.filter((el: any) => el.isVerified == false);
      },
      (err: any) => console.log(err)
    );
  }
  getFarmers() {
    this.configService.getFarmers().subscribe(
      (res: any) => {
        // this.farmers = res.results;
        console.log(res);
      },
      (err: any) => console.log(err)
    );
  }
  getApprovals() {}
}
