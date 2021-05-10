import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss'],
})
export class FarmerComponent implements OnInit {
  farmer: any;
  constructor(private router: Router, private configService: ConfigService) {}

  ngOnInit(): void {
    const id = localStorage.getItem('farmerId');
    this.farmer = '';
    this.configService.updateUser({ id: id }).subscribe(
      (res: any) => {
        this.farmer = res.users.user;
      },
      (err: any) => console.log(err)
    );
  }

  onSubmit(res: any) {
    const id = localStorage.getItem('farmerId');
    this.configService.updateUser({ id: id, res }).subscribe(
      (res: any) => {
        alert('Details Updated!');
        this.router.navigate(['/users']);
      },
      (err: any) => console.log(err)
    );
  }
}
