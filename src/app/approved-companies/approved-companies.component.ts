import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../Services/company.service';

@Component({
  selector: 'app-approved-companies',
  templateUrl: './approved-companies.component.html',
  styleUrls: ['./approved-companies.component.css']
})
export class ApprovedCompaniesComponent implements OnInit {
  Approved:any

  constructor(private services:CompanyService) { }

  ngOnInit(): void {
    this.GetApprovedCompany()
  }

  GetApprovedCompany()
  {
    this.services.GetApprovedCompanies().subscribe((res)=>{
      this.Approved=res
      console.log(res)
    })
  }
}
