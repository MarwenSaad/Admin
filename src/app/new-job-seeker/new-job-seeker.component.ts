import { Component, OnInit } from '@angular/core';
import { JobSeekerService } from '../Services/job-seeker.service';

@Component({
  selector: 'app-new-job-seeker',
  templateUrl: './new-job-seeker.component.html',
  styleUrls: ['./new-job-seeker.component.css']
})
export class NewJobSeekerComponent implements OnInit {
JobSeekers:any
  constructor(private JSS:JobSeekerService) { }

  ngOnInit(): void {
    this.NotApproved()
  }

  NotApproved()
  {
    this.JSS.GetNotApprovedJobSeekers().subscribe((res)=>{
      console.log(res)
      {
        this.JobSeekers=res
      }
    })
  }

}
