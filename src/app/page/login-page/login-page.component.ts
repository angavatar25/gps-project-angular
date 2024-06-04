import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from '../../component/error-msg/error-msg.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ErrorMsgComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public userForm = {
    username: '',
    password: '',
  }
  protected username = 'moovd_test'
  protected password = 'moovd_password'
  protected userFormWarning = {
    username: "Username is required",
    password: "Password is required",
  }
  protected showLoginError = false;
  myForm: any = FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
   });
  }

  onSubmit() {
    const ifLoginValid = this.userForm.username === this.username && this.userForm.password === this.password;

    if (this.myForm.valid && ifLoginValid) {
      this.router.navigate(['/gps-summary']);
      return;
    }

    if (!ifLoginValid) {
      this.showLoginError = true;
    }
  }

  isFieldValid(field: string) {
    return !this.myForm.get(field).valid && this.myForm.get(field).touched;
  }

  checkIfFormFilled() {
    return this.userForm.username.length > 0 && this.userForm.password.length > 0;
  }
}
