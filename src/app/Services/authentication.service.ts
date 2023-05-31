import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  LogIn(LoginForm:any)
  {
    return this.http.post(`${environment.baseUrl}/api/AuthenticationControllers/LogIn`,LoginForm)
  }
  ResetPassword(ResetForm:any)
  {
    return this.http.post(`${environment.baseUrl}/api/AuthenticationControllers/ForgetPassword`,ResetForm)
    
  }
}
