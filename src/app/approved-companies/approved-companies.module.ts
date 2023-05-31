import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovedCompaniesRoutingModule } from './approved-companies-routing.module';
import { ApprovedCompaniesComponent } from './approved-companies.component';


@NgModule({
  declarations: [
    ApprovedCompaniesComponent
  ],
  imports: [
    CommonModule,
    ApprovedCompaniesRoutingModule
  ]
})
export class ApprovedCompaniesModule { }
