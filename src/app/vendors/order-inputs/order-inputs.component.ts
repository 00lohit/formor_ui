import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-order-inputs',
  templateUrl: './order-inputs.component.html',
  styleUrls: ['./order-inputs.component.scss'],
})
export class OrderInputsComponent implements OnInit {
  products: any = [];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res.data.data;
      },
      (err: any) => console.log(err)
    );
  }
}
