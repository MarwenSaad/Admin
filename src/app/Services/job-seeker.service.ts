import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {

  constructor(private http:HttpClient) { }
  GetJobSeekerById(Id:any)
  {
    return this.http.get(`${environment.baseUrl}/api/JobSeekers/${Id}`)
  }
  GetAllJobSeekers()
  {
    return this.http.get(`${environment.baseUrl}/api/JobSeekers`)
  }
  GetApprovedJobSeekers()
  {
    return this.http.get(`${environment.baseUrl}/api/JobSeekers/Approved`)
  }
  GetNotApprovedJobSeekers()
  {
    return this.http.get(`${environment.baseUrl}/api/JobSeekers/NotApproved`)
  }
}
