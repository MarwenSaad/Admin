import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../Services/company.service';
import { JobSeekerService } from '../Services/job-seeker.service';
import { JobsService } from '../Services/jobs.service';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  Id=this.Activeroute.snapshot.params['Id']
  role=this.Activeroute.snapshot.params['Role']
  Company:any
  JobSeeker:any
  Jobs!:any[]
  constructor(private Activeroute:ActivatedRoute ,private JSS:JobSeekerService,private CS:CompanyService,private JS:JobsService) { }

  ngOnInit(): void {
    if(this.role=="Company")
    {
      this.GetCompanyById()
      this.GetJobsByCompany()
    }
    if(this.role=="JobSeeker")
    {
      this.GetJobSeekkerById()
    }
    
  }
  GetCompanyById()
  {
    this.CS.GetCompanyById(this.Id).subscribe((res)=>{
      console.log(res)
      this.Company=res
    })
  }
  GetJobsByCompany()
  {
    this.JS.GetJobsByCompany(this.Id).subscribe((res:any)=>{
      this.Jobs=res.map((item:any)=>{return{"J":item[1],"C":item[0]}})
      console.log('Jobs',this.Jobs)
    })
  }
  GetJobSeekkerById()
  {
    this.JSS.GetJobSeekerById(this.Id).subscribe((res)=>{
      console.log(res)
      this.JobSeeker=res
    })
  }

}
