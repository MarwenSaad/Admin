import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../Services/admin.service';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;

  constructor(private services:AuthenticationService,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.LoginForm=this.builder.group({
      Email:['',Validators.required],
      Password:['',Validators.required]
      
   })
  }

  LogIn()
  {
     this.services.LogIn(this.LoginForm.value).subscribe((res:any)=>{
      console.log(res)
      if(res!=null)
      {
        localStorage.setItem('userconnect',JSON.stringify(res.logInfo) )
        localStorage.setItem('token',res.token)
      }
     })
  }

}
