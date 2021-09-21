import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  rotation: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    if (this.rotation) {
      (<HTMLInputElement>document.querySelector('.icon')).style.transform =
        'rotate(90deg)';
      this.rotation = !this.rotation;
    } else {
      (<HTMLInputElement>document.querySelector('.icon')).style.transform =
        'rotate(0deg)';
      this.rotation = !this.rotation;
    }
  }
}
