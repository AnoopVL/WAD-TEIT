import { Component } from '@angular/core';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrl: './showdata.component.css',
})
export class ShowdataComponent {
  userRecords: any[] = [];
  constructor() {
    this.userRecords = JSON.parse(localStorage.getItem('users') || '');
  }
  data = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };
}
