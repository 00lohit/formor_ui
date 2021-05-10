import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.component.html',
  styleUrls: ['./add-farm.component.scss'],
})
export class AddFarmComponent implements OnInit {
  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(f: any) {
    f.userId = localStorage.getItem('farmerId');
    this.configService.createFarms(f).subscribe(
      (res: any) => {
        console.log(res);
        alert('Farm Added!');
        this.router.navigate(['/myfarms']);
      },
      (err: any) => console.log(err)
    );
  }
}
