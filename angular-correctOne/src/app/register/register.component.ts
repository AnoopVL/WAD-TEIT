import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor() {}
  ngOnInit(): void {}
  userRecords: any[] = [];
  data = {
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  };
  doRegister(Values: any) {
    this.userRecords = JSON.parse(localStorage.getItem('users') || '()');
    if (
      this.userRecords.some((v) => {
        return v.email == this.data.email;
      })
    ) {
      alert('Email already exisits!!');
    } else {
      this.userRecords.push(this.data);
      localStorage.setItem('users', JSON.stringify(this.userRecords));
      alert('Registeration successfull !!');
    }
  }
}
