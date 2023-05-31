import { Component, OnInit } from '@angular/core';
import { JobSeekerService } from '../Services/job-seeker.service';
import { JobsService } from '../Services/jobs.service';

@Component({
  selector: 'app-browse-job-seeker',
  templateUrl: './browse-job-seeker.component.html',
  styleUrls: ['./browse-job-seeker.component.css']
})
export class BrowseJobSeekerComponent implements OnInit {
JobSeekers:any
  constructor(private JSS:JobSeekerService) { }

  ngOnInit(): void {
    this.GetAllJobSeeker()
  }
  GetAllJobSeeker()
  {
    this.JSS.GetAllJobSeekers().subscribe((res)=>{
      console.log(res)
      this.JobSeekers=res
    })
  }

}
