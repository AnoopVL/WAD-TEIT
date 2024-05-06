import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  loggedInUser: any;

  constructor() {
    const userData = JSON.parse(localStorage.getItem('loggedInUser') || '');
    this.loggedInUser = userData ? userData : {};
  }
}
