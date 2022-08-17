import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  errorMessage: string = "";
  constructor(private _AuthService:AuthService , private _Router:Router) { }

  ngOnInit(): void {
  }

  loginForm:any = new FormGroup({
    email: new FormControl(null , [Validators.email, Validators.required]),
    password: new FormControl(null , [Validators.pattern("^[A-Z][a-z]{3,12}"), Validators.required]),
  })

  submitLoginForm() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this._AuthService.signIn(this.loginForm.value).subscribe({
        next: res => {
          if (res.message === "success") {
            localStorage.setItem("token", res.token);
            this._AuthService.saveUserData()
            this.isLoading = false;
            this._Router.navigate(['/home'])
          } else {
            this.isLoading = false;
            this.errorMessage = res.message;
          }
        }
      })
    }
  }
}
