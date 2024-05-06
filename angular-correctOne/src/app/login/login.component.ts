import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  userRecords: any[] = [];
  data = {
    email: '',
    password: '',
  };

  doLogin(Values: any) {
    this.userRecords = JSON.parse(localStorage.getItem('users') || '[]');

    const loggedInUser = this.userRecords.find(
      (user) =>
        user.email === this.data.email && user.password === this.data.password
    );

    if (loggedInUser) {
      alert('Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      this.router.navigate(['profile']);
    } else {
      alert('Login Failed!');
    }
  }

  // doLogin(Values: any) {
  //   this.userRecords = JSON.parse(localStorage.getItem('users') || '');
  //   if (
  //     this.userRecords.some((v) => {
  //       return v.email == this.data.email && v.password == this.data.password;
  //     })
  //   ) {
  //     alert('Login successfull !!');
  //     this.router.navigate(['showdata']);
  //   } else {
  //     alert('Login Failed !!');
  //   }
  // }
}
