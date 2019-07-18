import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('');
  passwords = new FormControl("");
  firstName = new FormControl('');
  lastName = new FormControl('');
  middleName = new FormControl("");


  updateEmail() {
    this.email.setValue('ankit@appdividend.com');
  }
  
  updateFirstName() {
    this.firstName.setValue('ankit');
  }
  updateLastName() {
    this.lastName.setValue('John');
  }

  setPassword() {
    this.passwords.setValue('John');
  }

  constructor() { }

  ngOnInit() {
  }

  onsubmit(){

    

  }

}
