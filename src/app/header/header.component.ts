import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  testClass: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  togglee() {
    this.testClass = !this.testClass;
  }

  removeClass() {
    if (this.testClass) {
      this.testClass = !this.testClass;
    }
  }

  onNavigate() {
    window.location.href = 'https://farmor.ag/admin/';
  }

  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

    this.removeClass();
  }

  toHome() {
    // document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.removeClass();
  }
  toPeople() {
    document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' });
    this.removeClass();
  }
  toCareers() {
    document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth' });
    this.removeClass();
  }

  toContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    this.removeClass();
  }
}
