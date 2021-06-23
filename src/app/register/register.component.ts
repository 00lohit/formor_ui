import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(res: any) {
    const id = localStorage.getItem('userId');
    this.configService.updateUser({ id: id, res }).subscribe(
      (res: any) => {
        alert('Details Updated!');
        this.router.navigate(['/create-farmer']);
      },
      (err: any) => console.log(err)
    );
  }
}
