import { Component, OnInit } from '@angular/core';
import { JobSeekerService } from '../Services/job-seeker.service';

@Component({
  selector: 'app-approved-job-seeker',
  templateUrl: './approved-job-seeker.component.html',
  styleUrls: ['./approved-job-seeker.component.css']
})
export class ApprovedJobSeekerComponent implements OnInit {
  JobSeekers:any
  constructor(private JSS:JobSeekerService) { }

  ngOnInit(): void {
    this.GetApprovedJobSeeker()
  }

  
  GetApprovedJobSeeker()
  {
    this.JSS.GetApprovedJobSeekers().subscribe((res)=>{
      console.log(res)
      this.JobSeekers=res
    })
  }
}
