import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w.+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
      ]),
      pwd: new FormControl('', Validators.required),
    });
  }
  loginFormData() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
