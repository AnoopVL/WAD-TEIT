import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  registerBtn() {
    this.router.navigate(['register']);
  }
  loginBtn() {
    this.router.navigate(['login']);
  }
  showdataBtn() {
    this.router.navigate(['showdata']);
  }
  profileBtn() {
    this.router.navigate(['profile']);
  }
}
