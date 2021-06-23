import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
})
export class VendorsComponent implements OnInit {
  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(res: any) {
    const id = localStorage.getItem('userId');
    this.configService.updateUser({ id: id, res }).subscribe(
      (res: any) => {
        alert('Details Updated!');
        console.log(res);
        this.router.navigate(['/vendor-nav']);
      },
      (err: any) => console.log(err)
    );
  }
}
