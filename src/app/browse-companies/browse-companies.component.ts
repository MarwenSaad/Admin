import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../Services/company.service';

@Component({
  selector: 'app-browse-companies',
  templateUrl: './browse-companies.component.html',
  styleUrls: ['./browse-companies.component.css']
})
export class BrowseCompaniesComponent implements OnInit {
company:any
  constructor(private services:CompanyService) { }

  ngOnInit(): void {
    this.GetCompanies()
  }

  GetCompanies()
  {
    this.services.GetAllCompany().subscribe((res)=>{
      console.log(res)
      this.company=res
    })
  }


}
