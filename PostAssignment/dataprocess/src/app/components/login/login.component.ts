import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm?:FormGroup;
  username?:string;
  password?:string;
  errorMessage?: string;

 
 
  ngOnInit(): void{
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
 
 
  constructor(private authService:AuthServiceService, private router:Router){}
 
 
  login(value: { username: string; password: string }) {
    this.authService.login(value.username, value.password).subscribe(
      (data) => {
        localStorage.setItem('token', data.token);
       
        this.router.navigate(['/home']);
      },
      (error) => {
        this.errorMessage = 'Wrong username or password'; // Store error message
      }
    );
  }
  
  }
  

  

