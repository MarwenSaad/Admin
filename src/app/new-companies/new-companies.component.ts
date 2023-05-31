import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../Services/company.service';

@Component({
  selector: 'app-new-companies',
  templateUrl: './new-companies.component.html',
  styleUrls: ['./new-companies.component.css']
})
export class NewCompaniesComponent implements OnInit {
NotApproved:any
  constructor(private services:CompanyService) { }

  ngOnInit(): void {
    this.GetNotApproved()
  }

  GetNotApproved()
  {
    this.services.GetNewCompanies().subscribe((res)=>{
      this.NotApproved=res
    })
  }

}
