import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-add-crop',
  templateUrl: './add-crop.component.html',
  styleUrls: ['./add-crop.component.scss'],
})
export class AddCropComponent implements OnInit {
  crops: any = [
    { name: 'Paddy', variety: ['123', '236', 'small', 'Basmathi'] },
    { name: 'Black Gram', variety: ['4793', '2kfl36', 'seqall', 'jkajd'] },
    { name: 'Jowar', variety: ['dkd', 'jqwj', 'eoqwpd', 'ekqwek'] },
  ];
  varieties: any = [];
  farms: any;
  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {
    const id = localStorage.getItem('farmerId');
    this.getFarms({ userId: id });
  }

  onSelect(event: any) {
    const crop = event.target.value;
    this.varieties = this.crops.find((el: any) => el.name === crop);
  }

  getFarms(res: any) {
    this.configService.getFarms(res).subscribe(
      (res: any) => {
        this.farms = res.data.farms;
      },
      (err: any) => console.log(err)
    );
  }

  onSubmit(f: any) {
    f.userId = localStorage.getItem('farmerId');
    this.configService.createCrops(f).subscribe(
      (res: any) => {
        console.log(res);
        alert('Crop Added!');
        this.router.navigate(['/mycrops']);
      },
      (err: any) => console.log(err)
    );
  }
}
