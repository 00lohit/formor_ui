import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res.data.data[0];
        console.log(this.products);
      },
      (err: any) => console.log(err)
    );
  }
}
