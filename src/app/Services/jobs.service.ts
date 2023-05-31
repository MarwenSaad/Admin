import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http:HttpClient) { }

  GetAllJobs()
  {
    return this.http.get(`${environment.baseUrl}/api/Jobs`)
  }
  GetJobsByCompany(CompanyId:any)
  {
    return this.http.get(`${environment.baseUrl}/api/Jobs/GetJobsByCompany/${CompanyId}`)
  }
}
