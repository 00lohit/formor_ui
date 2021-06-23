import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-nav',
  templateUrl: './vendor-nav.component.html',
  styleUrls: ['./vendor-nav.component.scss'],
})
export class VendorNavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToOrders() {
    this.router.navigate(['/order-inputs']);
  }
}
