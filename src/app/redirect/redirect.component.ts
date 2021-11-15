import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.app.farmor';
  }
}
