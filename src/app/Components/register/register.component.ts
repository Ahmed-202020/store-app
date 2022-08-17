import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  errorMessage: string = "";
  constructor(private _AuthService:AuthService , private _Router:Router) { }
  ngOnInit(): void {
  }
  registerForm:any = new FormGroup({
    first_name: new FormControl(null , [Validators.minLength(3), Validators.maxLength(16), Validators.required]),
    last_name: new FormControl(null , [Validators.minLength(3), Validators.maxLength(16), Validators.required]),
    email: new FormControl(null , [Validators.email, Validators.required]),
    password: new FormControl(null , [Validators.pattern("^[A-Z][a-z]{3,12}"), Validators.required]),
    age: new FormControl(null , [Validators.min(18), Validators.max(60), Validators.required])
  })
  submitRegisterForm() {
    this.isLoading = true;
    if (this.registerForm.valid) {
      this._AuthService.signUp(this.registerForm.value).subscribe({
        next: res => {
          if (res.message === "success") {
            this.isLoading = false;
            this._Router.navigate(['/login'])
          } else {
            this.isLoading = false;
            this.errorMessage = res.message;
          }
        }
      })
    }
  }
}
