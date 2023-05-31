import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  GetAllCompany()
  {
    return this.http.get(`${environment.baseUrl}/api/Companies`)
  }
  GetCompanyById(Id:any)
  {
    return this.http.get(`${environment.baseUrl}/api/Companies/${Id}`)
  }
  GetApprovedCompanies()
  {
    return this.http.get(`${environment.baseUrl}/api/Companies/Approved`)
  }
  GetNewCompanies()
  {
    return this.http.get(`${environment.baseUrl}/api/Companies/NotApproved`)
  }
}
