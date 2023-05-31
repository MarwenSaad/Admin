import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { CompanyService } from 'src/app/Services/company.service';
import { JobSeekerService } from 'src/app/Services/job-seeker.service';
import { JobsService } from 'src/app/Services/jobs.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
Admins:any
Companies:any
Jobs:any
Jobseekers:any
  constructor(private AS:AdminService,private JSS:JobSeekerService,private CS:CompanyService ,private JS:JobsService) { }

  ngOnInit(): void {
    this.GetCompany()
    this.GetAdmins()
    this.GetJobSeekers()
    //this.GetJobs
  }

  GetCompany()
  {
    this.CS.GetAllCompany().subscribe((res)=>{
      this.Companies=res
      console.log(this.Companies)

    })
  }
  GetAdmins()
  {
    this.AS.GetAllAdmin().subscribe((res)=>{
      this.Admins=res
      console.log(this.Admins)
    })
  }
  GetJobs()
  {
    this.JS.GetAllJobs().subscribe((res)=>{
      this.Jobs=res
      console.log(this.Jobs)
    })
  }
  GetJobSeekers()
  {
    this.JSS.GetAllJobSeekers().subscribe((res)=>{
      this.Jobseekers=res
      console.log(this.Jobseekers)
    })
  }

}
