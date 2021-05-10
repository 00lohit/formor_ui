import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.scss'],
})
export class CreateusersComponent implements OnInit {
  users: any = [];
  constructor(private router: Router, private configService: ConfigService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  onSubmit() {
    this.router.navigate(['/create']);
  }

  onNavigate(res: any) {
    localStorage.setItem('farmerId', res);
    this.router.navigate(['/create-farmer']);
  }

  redirectTo(): any {
    this.router.navigate(['/farms']);
  }

  navTo(): any {
    this.router.navigate(['/crops']);
  }

  search(res: any) {
    console.log(res);
    this.configService.getSearchedFarmer(res).subscribe(
      (res: any) => {
        this.users = res.users;
      },
      (err: any) => console.log(err)
    );
  }

  getUsers(): any {
    this.configService.getUsers().subscribe(
      (res: any) => {
        this.users = res.users;
      },
      (err: any) => console.log(err)
    );
  }
}
