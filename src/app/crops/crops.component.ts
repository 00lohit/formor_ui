import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.scss'],
})
export class CropsComponent implements OnInit {
  farmers: any;
  constructor(private router: Router, private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.getFarmers().subscribe(
      (res: any) => {
        this.farmers = res.users;
      },
      (err: any) => console.log(err)
    );
  }

  onSubmit(res: any) {
    const farmerId = localStorage.setItem('farmerId', res.userId);
    this.router.navigate(['/add-crop']);
  }
}
