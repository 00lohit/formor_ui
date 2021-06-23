import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';
import { Users } from '../users';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.scss'],
})
export class CreateusersComponent implements OnInit {
  users: any[] = [];
  searchValue: any;

  // name: any;
  // user: any;
  constructor(private router: Router, private configService: ConfigService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  // ngOnChanges(): any {
  //   this.users = this.users.find((el: any) => el.name === this.name);
  // }

  onSubmit() {
    this.router.navigate(['/create']);
  }

  onNavigate(res: any) {
    localStorage.setItem('farmerId', res);
    this.router.navigate(['/create-farmer']);
  }
  onNavigateToAddFarms(res: any) {
    localStorage.setItem('farmerId', res);
    this.router.navigate(['/add-farm']);
  }
  onNavigateToAddCrops(res: any) {
    localStorage.setItem('farmerId', res);
    this.router.navigate(['/add-crop']);
  }

  redirectTo(): any {
    this.router.navigate(['/farms']);
  }

  navTo(): any {
    this.router.navigate(['/crops']);
  }

  // search(res: any) {
  //   if (res.contact === '' || res.contact.length < 10)
  //     return alert('Enter a valid Key');
  //   console.log(res.contact.length);
  //   this.configService.getSearchedFarmer(res).subscribe(
  //     (res: any) => {
  //       this.users = res.users;
  //     },
  //     (err: any) => console.log(err)
  //   );
  // }

  getUsers(): any {
    this.configService.getUsers().subscribe(
      (res: any) => {
        this.users = res.users;
      },
      (err: any) => console.log(err)
    );
  }
}
