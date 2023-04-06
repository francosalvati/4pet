import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

    userControl: FormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    passControl: FormControl = new FormControl('', [
      Validators.required
    ])

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      user: this.userControl,
      password: this.passControl
    })
  }

  ngOnInit() { }

  navigateToSignIn() {
    this.router.navigate(['/sign-in'])
  }

  onSubmit(){

  }
}
